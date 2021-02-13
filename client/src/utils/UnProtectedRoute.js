import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Navbar } from './Importer';
import Movie from '../components/movies/Movie';
import Login from '../components/auth/Login';
import Guest from './Guest';

const Catalog = React.lazy(() => import('../components/movies/Catalog'));

function UnProtectedRoute(props) {

    return (
        <>
            <Route exact path="/">
                <Guest>
                    <Navbar header={"header header--static"}/>
                    <Suspense fallback={"Loading...."}>
                        <Catalog />
                    </Suspense>
                </Guest>
            </Route>

            <Route exact path="/:genreId/:genre">
                <Guest>
                    <Navbar header={"header header--static"}/>
                    <Suspense fallback={"Loading...."}>
                        <Catalog />
                    </Suspense>
                </Guest>
            </Route>
            
            <Route exact path="/movie/:id/:title">
                <Guest>
                    <Navbar header={"header header--hidden"}/>
                    <Movie />
                </Guest>
            </Route>

            <Route exact path="/login">
                <Guest>
                    <Login />
                </Guest>
            </Route>
        </>
    );
}

export default UnProtectedRoute;