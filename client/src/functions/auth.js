import axios from '../utils/axios';

export const login = async(email,password) => {
    try {
        let res = await axios.post('/login', {email,password});
        const data = res.data;
        if(data.message) {
            alert(data.message)
        } else {
            sessionStorage.setItem("auth", "login");
            return data;
        }
    } catch (error) {
        throw error
    }
}
