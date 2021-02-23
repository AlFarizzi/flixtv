import React,{ useState, useEffect } from 'react';
import { getMovieGenres } from '../../../functions/movies';
import { storage } from '../../../utils/firebase';
import axios from '../../../utils/axios';
import Poster from '../upload/Poster';
import Video from '../upload/Video';
import Select2 from '../movies/Select2';
import OverLay from '../../../utils/OverLay';
import Loader from '../../../utils/Loader';

function Add({data}) {
    const [genres,setGenres] = useState([]);
    const [title,setTitle] = useState('');
    const [sinopsis,setSinopsis] = useState('');
    const [release,setRelease] = useState('');
    const [duration,setDuration] = useState('');
    const [rating,setRating] = useState('');
    const [movieGenres,setMovieGenres] = useState([]);
    const [cover,setCover] = useState(null);
    const [video,setVideo] = useState(null)
    const [coverLink,setCoverLink] = useState(null);
    const [videoLink,setVideoLink] = useState(null)
    const [loading,setLoading] = useState(false);

    const videoHandler = (e) => {
        setVideo(e.target.files[0]);
    }

    const coverHandler = (e) => {
        setCover(e.target.files[0]);
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById("form__img").src = e.target.result
        }
		reader.readAsDataURL(e.target.files[0]);
    }

    const timeHandler = (e) => {
        const hours = Math.floor(e.target.value / 60);
        const minutes = Math.floor(e.target.value % 60);
        setDuration(`${hours} hrs ${minutes} mins`)
    }

    const uploadVideoHandler = () => {
        const uploadTask = storage.ref(`videos/${video.name}`).put(video);
        uploadTask.on(
            'state_changed',
            snapshot => {
                console.log(Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100),"Data Film Terupload")
            },
            error => {
                console.log(error)
            },
            () => {
                storage.ref('videos')
                .child(video.name)
                .getDownloadURL()
                .then(url => {
                    setVideoLink(url)
                })
            }
        )
   }

    const uploadCoverHandler = () => {
        const uploadTask = storage.ref(`covers/${cover.name}`).put(cover)
        uploadTask.on(
            'state_changed',
            snapshot => {
                console.log(Math.floor(snapshot.bytesTransferred / snapshot.totalBytes * 100),"Data Poster Terupload")
            },
            error => {
                console.log(error);
            },
            () => {
                storage.ref("covers")
                .child(cover.name)
                .getDownloadURL()
                .then((url) => {
                    setCoverLink(url)
                })
            }
        )
    }

    const uploadFilmHandler = (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            uploadCoverHandler();
            uploadVideoHandler();
        } catch (error) {
            throw error
        }
    }

    const genresHandler = (e) => {
        setMovieGenres(e);
    }

    useEffect(() => {
        const ac = new AbortController();
        async function getGenres() {
            setGenres(await getMovieGenres());
        }
        getGenres()
        return () => ac.abort();
    },[])

    useEffect(() => {
        if(coverLink !== null && videoLink !== null) {
            (async function() {
                let res = await axios.post('/m/add-movie', {
                    title: title,
                    synopsis: sinopsis,
                    release_date: release,
                    duration: duration,
                    genres: movieGenres,
                    poster_link: coverLink,
                    video_link: videoLink,
                    rating:parseFloat(rating) 
                })
                res.data && alert("Film Berhasil Diupload");
                setCoverLink(null)
                setCover(null)
                setVideoLink(null)
                setVideo(null)
                setLoading(false);
            })()
        }
    }, [coverLink,videoLink,duration,movieGenres,release,sinopsis,title,rating]);

    return (
        <>
          <Loader loading={ loading } />
           { loading &&  <OverLay />}  
            {/* main content */}
            <main className="main">
            <div className="container-fluid">
                <div className="row">
                {/* main title */}
                <div className="col-12">
                    <div className="main__title">
                    <h2>Add new item</h2>
                    </div>
                </div>
                {/* end main title */}
                {/* form */}
                <div className="col-12">
                    <form onSubmit={uploadFilmHandler} className="form">
                    <div className="row">
                        <div className="col-12 col-md-5 form__cover">
                            <Poster onUpload={coverHandler} />
                        </div>
                        <div className="col-12 col-md-7 form__content">
                        <div className="row">
                            <div className="col-12">
                            <div className="form__group">
                                <input onChange={e => setTitle(e.target.value)} 
                                type="text" className="form__input" placeholder="Title" />
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="form__group">
                                <textarea onChange={e => setSinopsis(e.target.value)} 
                                id="text" name="text" className="form__textarea" placeholder="Description" defaultValue={""} />
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="form__group">
                                    <input 
                                    onChange={e => setRelease(e.target.value)}
                                    type="text" className="form__input" placeholder="Release year" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="form__group">
                                    <input 
                                    onChange={timeHandler}
                                    type="number" className="form__input" placeholder="Running timed in minutes" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-4">
                                <div className="form__group">
                                    <input 
                                    onChange={e => setRating(e.target.value)}
                                    type="number" className="form__input" placeholder="Rating" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-12">
                                <div className="form__group">
                                   <Select2 changeHandler={genresHandler} options={genres} />
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="row">
                            <Video onUpload={videoHandler} />
                            <div className="col-12">
                                <button type="submit" className="form__btn">publish</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                {/* end form */}
                </div>
            </div>
            </main>
            {/* end main content */}
        </>
    );
}

export default Add;