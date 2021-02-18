import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieByTitle, postComment as postCommentToServer} from '../../functions/movies';
import Comment from './Comment';

function Movie(props) {
    const { title,id } = useParams();
    const [detail,setDetail] = useState([]);
    const [comment,setComment] = useState('');

    const commentHandler = (c) => {
        setComment(c)
    }

    const postComment = async() => {
        if(comment) {
            let res = await postCommentToServer(comment,detail.id)
            res.created && alert("Tanggapan Berhasil Diberikan");
            setDetail(await getMovieByTitle(id))
        } else {
            alert("Isi Kolom Komentar");
        }
    }

    useEffect(() => {
        (async function() {
            setDetail(await getMovieByTitle(id))
        })()
    },[id,title])

    return (
        <section className="section section--head section--head-fixed section--gradient section--details-bg">
        <div className="section__bg" data-bg="/assets/img/details.jpg" />
        <div className="container">
            {/* article */}
            <div className="article">
            <div className="row">
                <div className="col-12 col-xl-12">
                {/* trailer */}
                <a rel="noreferrer" target="_blank" href={`${detail.video}`} className="article__trailer">
                    <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="../../../../external.html?link=http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" strokeLinecap="round" strokeLinejoin="round" /><path fillRule="evenodd" clipRule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Trailer
                </a>
                {/* end trailer */}
                {/* article content */}
                <div className="article__content">
                    <h1>{detail.title}</h1>
                    <ul className="list">
                        <li>{detail.release}</li>
                        <li>{detail.duration}</li>
                    </ul>
                    <p>
                        {detail.sinopsis}
                    </p>
                </div>
                {/* end article content */}
                </div>
                {/* video player */}
                <div className="col-12 col-xl-6">
                    <video  poster={`${detail.poster}`} controls playsInline src={`${detail.video}`} id="player" alt="media">
                    </video>
                </div>
                {/* end video player */}
                <div className="col-12 col-xl-12">
                {/* categories */}
                <div className="categories">
                    <h3 className="categories__title">Genres</h3>
                    {
                        detail?.genres?.map((genre,key) => (
                            <a key={key} href={`/${genre.id}/${genre.genre}`} className="categories__item">{genre.genre}</a>
                        ))
                    }
                </div>
                {/* end categories */}
                </div>
            </div>
                <div className="row">
                    <div className="col-12 col-xl-12">
                        <Comment clickHandler={postComment} onComment={commentHandler} comments={detail.comments} />
                    </div>
                </div>
            </div>
            {/* end article */}
        </div>
        </section>
    );
}

export default Movie;