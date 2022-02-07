import axios from "axios";

const BASE = 'http://localhost:5000'

function signUp(body) {
    const promise = axios.post(`${BASE}/sign-up`, body);
    return promise;
}

function signIn(body) {
    const promise = axios.post(`${BASE}/`, body);
    return promise;
}

const api = {
    signUp, signIn
}

export default api;