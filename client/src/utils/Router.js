import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar,Catalog,Movie,Login, Index, Add, Movies, Edit, Genres, Profile } from './Importer';

import Guest from './Guest';
import ProtectedRoute from './ProtectedRoute';
import NotFound from '../components/NotFound';

function Router(props) {
    console.log("Router Re-render");
    return (
        <>
            <Switch>
                {/* <UnProtectedRoute /> */}
                <Route exact path="/">
                    <Guest>
                        <Suspense fallback={"Loading...."}>
                            <Catalog />
                        </Suspense>
                    </Guest>
                </Route>

                <Route exact path="/:genreId/:genre">
                    <Guest>
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
                
                <ProtectedRoute exact path="/admin" component={Index}  />
                <ProtectedRoute exact path="/add-item" component={Add}  />
                <ProtectedRoute exact path="/catalog" component={Movies}/>
                <ProtectedRoute exact path="/edit/:id/:title" component={Edit} />
                <ProtectedRoute exact path="/genres" component={Genres} />
                <ProtectedRoute exact path="/catalog/:id/:genre" component={Movies} />
                <ProtectedRoute exact path="/profile-setting" component={Profile}/>

                <Route component={NotFound} />
            </Switch>
        </>
    
    );
}

export default Router;