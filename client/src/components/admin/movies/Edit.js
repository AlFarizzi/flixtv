import React,{ useState, useEffect } from 'react';
import { getMovieGenres, getMovieByTitle } from '../../../functions/movies';
import axios from '../../../utils/axios';
import Select2 from './Select2';
import { useParams } from 'react-router-dom';
import Loader from '../../../utils/Loader';
import OverLay from '../../../utils/OverLay';
import { useRecoilValue } from 'recoil';
import { user } from '../../../utils/atom';

function Add({data}) {
    const { id } = useParams();
    const userData = useRecoilValue(user);
    const [movie,setMovie] = useState(null);
    const [genres,setGenres] = useState([]);
    const [title,setTitle] = useState('');
    const [sinopsis,setSinopsis] = useState('');
    const [release,setRelease] = useState('');
    const [duration,setDuration] = useState('');
    const [movieGenres,setMovieGenres] = useState([]);
    const [loading,setLoading] = useState(false);

    const timeHandler = (e) => {
        console.log(e);
        const hours = Math.floor(e / 60);
        const minutes = Math.floor(e % 60);
        return `${hours} hrs ${minutes} mins`;
    }

    const reverseTimeHandler = (time) => {
        console.log(time);
        let hrs = time.split(" hrs");
        let mins = time.split(" hrs")[1];
        let result;
        if(hrs.length > 1) {
            result = (+hrs[0] * 60) + +mins.split(" mins")[0]
        } else {
            result = time
        }
        console.log(result,typeof result);
        return result;
    }

    const genresHandler = (e) => {
        setMovieGenres(e);
    }

    const editMovieHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            let res = await axios.put('/m/update-movie', {
                title:title,
                duration:timeHandler(duration),
                release_date:release,
                synopsis:sinopsis,
                movie:movie,
                genres: movieGenres.length > 0 ? movieGenres : movie.genres
            }, {
                headers: {
                    "Authorization": `Bearer ${userData.token}`
                }
            })
            res.data.edited === true ? alert("Berhasil melakukan update data") : alert("Update data tidak berhasil dilakukan");
        } catch (error) {
            throw error
        }
        setLoading(false);
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
        (async function() {
            setMovie(await getMovieByTitle(id))
        })()        
    }, [id]);

    useEffect(() => {
        if(movie !== null) {
            setTitle(movie.title);
            setSinopsis(movie.sinopsis);
            setRelease(movie.release);
            setDuration(reverseTimeHandler(movie?.duration));
        }
    }, [movie]);

    return (
        <>
            <Loader loading={loading} />
            {loading && <OverLay /> }
            {/* main content */}
            <main className="main">
            <div className="container-fluid">
                <div className="row">
                {/* main title */}
                <div className="col-12">
                    <div className="main__title">
                    <h2>Update item</h2>
                    </div>
                </div>
                {/* end main title */}
                {/* form */}
                <div className="col-12">
                    <form onSubmit={editMovieHandler} className="form">
                    <div className="row">
                        <div className="col-12 col-md-7 form__content">
                        <div className="row">
                            <div className="col-12">
                            <div className="form__group">
                                <input value={title} onChange={e => setTitle(e.target.value)} 
                                type="text" className="form__input" placeholder="Title" />
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="form__group">
                                <textarea value={sinopsis} onChange={e => setSinopsis(e.target.value)} 
                                id="text" name="text" className="form__textarea" placeholder="Description" />
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6">
                                <div className="form__group">
                                    <input 
                                    value={release}
                                    onChange={e => setRelease(e.target.value)}
                                    type="text" className="form__input" placeholder="Release year" />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6">
                                <div className="form__group">
                                    <input 
                                    value={duration}
                                    onChange={e => setDuration(e.target.value)}
                                    type="number" className="form__input" placeholder="Running timed in minutes" />
                                </div>
                            </div>
                            <div className="col-12 col-lg-12">
                                <div className="form__group">
                                    <Select2 options={genres} changeHandler={genresHandler} />
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <div className="row">
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