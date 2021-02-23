import Router from './utils/Router';
import {user} from './utils/atom';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import Disconnect from './utils/Disconnect';

function App() {
   
    const [userData,setUserData] = useRecoilState(user);
    const [connected,setConnected] = useState(window.navigator.onLine);
    const reload = () => {
        window.addEventListener("beforeunload", (e) => {
            if(userData?.token !== null) localStorage.setItem("auth",JSON.stringify(userData));
        })
        window.addEventListener("DOMContentLoaded", (e) => {
            let data = JSON.parse(localStorage.getItem("auth"));
            if(data?.token !== null) {
                setUserData({...data})
                setTimeout(() => {
                    localStorage.removeItem("auth")
                }, 2500);
            };
        })
    }
    reload();

    return (
        <>
        {
            setInterval(() => {
                setConnected(window.navigator.onLine);
            },3000)
        }
        {
            connected ? <Router /> : <Disconnect />
        }
        </>
    )
}

export default App;