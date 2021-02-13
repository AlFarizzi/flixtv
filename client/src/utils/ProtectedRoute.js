import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../components/admin/navigation/Navbar';
import Sidebar from '../components/admin/navigation/Sidebar';

function ProtectedRoute({component:Component,...rest}) {
    const login = sessionStorage.getItem("auth");
    return (
        <>
            <Route
                {...rest}
                render={props => {
                    if(login !== null && login === "login") {
                        return (
                            <>
                                <Navbar />
                                <Sidebar />
                                <Component />
                            </>
                        )
                    } else {
                        return <Redirect to="/" />
                    }
                }}
            />
        </>
    );
}

export default ProtectedRoute;