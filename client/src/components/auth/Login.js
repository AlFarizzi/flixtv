import React,{ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {login} from '../../functions/auth';
import { useRecoilState } from 'recoil';
import {user} from '../../utils/atom';

function Login(props) {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [auth,setAuth] = useState([]);
    const setUserData = useRecoilState(user)[1];

    const loginHandler = async (e) => {
        e.preventDefault();
        email && password ? setAuth(await login(email,password)) : alert("Lengkapi Data Login");
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        if(auth?.token) {
            setUserData({
                id:auth.data.id,
                name:auth.data.name,
                email:auth.data.email,
                token:auth.token
            })
            setTimeout(()=>{
                history.push("/admin");
            },250)
        }
    },[auth,history,setUserData])

    return (
        <>
            {/* sign in */}
            <div className="sign section--bg" data-bg="/assets/img/bg.jpg">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="sign__content">
                    {/* authorization form */}
                    <form onSubmit={loginHandler} className="sign__form">
                        <div className="sign__group">
                            <input 
                            value={email} 
                            type="email" 
                            className="sign__input" 
                            placeholder="Email" 
                            onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="sign__group">
                            <input 
                            value={password}
                            type="password" 
                            className="sign__input" 
                            placeholder="Password" 
                            onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="sign__btn" type="submit">Sign in</button>
                    </form>
                    {/* end authorization form */}
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* end sign in */}
        </>
    );
}

export default Login;