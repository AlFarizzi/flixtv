import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from './Importer';
import Movie from '../components/movies/Movie';
import Login from '../components/auth/Login';

const Catalog = React.lazy(() => import('../components/movies/Catalog'));
const Carousel = React.lazy(() => import('../components/movies/Carousel'));

function UnProtectedRoute(props) {

    return (
        <>
            <Route exact path="/">
                <Navbar />
                <Suspense fallback={"Loading...."}>
                    <Carousel />
                </Suspense>
                <Suspense fallback={"Loading...."}>
                    <Catalog />
                </Suspense>
            </Route>

            <Route exact path="/:genreId/:genre">
                <Navbar />
                <Suspense fallback={"Loading...."}>
                    <Carousel />
                </Suspense>
                <Suspense fallback={"Loading...."}>
                    <Catalog />
                </Suspense>
            </Route>
            
            <Route exact path="/movie/:id/:title">
                <Navbar />
                <Movie />
            </Route>

            <Route exact path="/login">
                <Login />
            </Route>
        </>
    );
}

export default UnProtectedRoute;