import React, { useState,useEffect } from 'react';
import { getMovieGenres } from '../../functions/movies';
// import { Link } from 'react-router-dom';
const path = window.location.pathname;

export const Navbar = ({ header, onSearch, onClick }) =>{
    const [genres,setGenres] = useState([]);
    useEffect(() => {
        const login = sessionStorage.getItem("auth");
        const getGenres = async () => {
            setGenres(await getMovieGenres());
        }
        if(login !== "login" || login === null) {
            getGenres();
        }
    }, []);
    console.log("navbar rendered");
    return (
        <>
            {/* header (relative style) */}
            {/* <header className={`${path === "/" ? 'header header--static' : 'header header--hidden'}`}> */}
            <header className={header}>
                <div className="container">
                <div className="row">
                    <div className="col-12">
                    <div className="header__content">
                        <button className="header__menu" type="button">
                        <span />
                        <span />
                        <span />
                        </button>
                        <a href="/" className="header__logo__client">
                            <img src="https://dmitryvolkov.me/demo/flixtv/main/img/logo.svg" alt="Movies & TV Shows, Online cinema HTML Template" />
                        </a>
                        <ul className="header__nav">
                        <li className="header__nav-item">
                            <a className="header__nav-link" href="/">Home</a>
                        </li>
                        <li className="header__nav-item">
								<a className="header__nav-link" href="!#" role="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Genre </a>
								<ul className="dropdown-menu header__nav-menu" aria-labelledby="dropdownMenu2">
									{
                                        genres?.map((genre,key) => (
                                            <li key={key}>
                                                <a href={`/${genre.value}/${genre.label}`}>{genre.label}</a>
                                            </li>
                                        ))
                                    }
								</ul>
							</li>
                        </ul>
                        <div className="header__actions">
                        <form action="#" className="header__form">
                            <input onChange={(e) => {
                                onSearch(e.target.value)
                            }} className="header__form-input" type="text" placeholder="I'm looking for..." />
                            <button 
                            onClick={onClick}
                            className="header__form-btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg></button>
                            <button type="button" className="header__form-close"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="../../../../external.html?link=http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M14.3345 0.000183105H5.66549C2.26791 0.000183105 0.000488281 2.43278 0.000488281 5.91618V14.0842C0.000488281 17.5709 2.26186 20.0002 5.66549 20.0002H14.3335C17.7381 20.0002 20.0005 17.5709 20.0005 14.0842V5.91618C20.0005 2.42969 17.7383 0.000183105 14.3345 0.000183105ZM5.66549 1.50018H14.3345C16.885 1.50018 18.5005 3.23515 18.5005 5.91618V14.0842C18.5005 16.7653 16.8849 18.5002 14.3335 18.5002H5.66549C3.11525 18.5002 1.50049 16.7655 1.50049 14.0842V5.91618C1.50049 3.23856 3.12083 1.50018 5.66549 1.50018ZM7.07071 7.0624C7.33701 6.79616 7.75367 6.772 8.04726 6.98988L8.13137 7.06251L9.99909 8.93062L11.8652 7.06455C12.1581 6.77166 12.6329 6.77166 12.9258 7.06455C13.1921 7.33082 13.2163 7.74748 12.9984 8.04109L12.9258 8.12521L11.0596 9.99139L12.9274 11.8595C13.2202 12.1524 13.2202 12.6273 12.9273 12.9202C12.661 13.1864 12.2443 13.2106 11.9507 12.9927L11.8666 12.9201L9.99898 11.052L8.13382 12.9172C7.84093 13.2101 7.36605 13.2101 7.07316 12.9172C6.80689 12.6509 6.78269 12.2343 7.00054 11.9407L7.07316 11.8566L8.93843 9.99128L7.0706 8.12306C6.77774 7.83013 6.77779 7.35526 7.07071 7.0624Z" /></svg></button>
                        </form>
                        <button className="header__search" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" /></svg>
                        </button>
                        <a href="/login" className="header__user">
                            <span>Sign in</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20,12a1,1,0,0,0-1-1H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H19A1,1,0,0,0,20,12ZM17,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V16a1,1,0,0,0-2,0v3a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V5A3,3,0,0,0,17,2Z" /></svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            {/* end header */}
        </>
    );
}

export default Navbar;