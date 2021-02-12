import React from 'react';
import { Route } from 'react-router-dom';
// import { useRecoilState } from 'recoil';
// import { user } from './atom';
import Navbar from '../components/admin/navigation/Navbar';
import Sidebar from '../components/admin/navigation/Sidebar';

function ProtectedRoute({component:Component,...rest}) {
    // const userData = useRecoilState(user)[0];
    return (
        <>
            <Route
                {...rest}
                render={props => {
                    // if(userData.token) {
                        return (
                            <>
                                <Navbar />
                                <Sidebar />
                                <Component />
                            </>
                        )
                    // } else {
                    //     return <Redirect to="/" />
                    // }
                }}
            />
        </>
    );
}

export default ProtectedRoute;