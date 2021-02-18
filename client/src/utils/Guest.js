import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Guest(props) {
    const history = useHistory();
    const auth = sessionStorage.getItem("auth")
    useEffect(() => {
        let ac = new AbortController();
        if(auth !== null && auth === "login") {
            history.push('/admin')
        }
        return ac.abort();
    },[auth,history])
   return auth !== "login" && props.children
}

export default Guest;