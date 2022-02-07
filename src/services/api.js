import axios from "axios";

const BASE = 'http://localhost:5000'

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } }
}

function signUp(body) {
    const promise = axios.post(`${BASE}/sign-up`, body);
    return promise;
}

function signIn(body) {
    const promise = axios.post(`${BASE}/`, body);
    return promise;
}

function createEntry(body, token) {
    const config = createConfig(token);
    const promise = axios.post(`${BASE}/new`, body, config);
    return promise;
}

function getEntries(token) {
    const config = createConfig(token);
    const promise = axios.get(`${BASE}/home`, config);
    return promise;
}

const api = {
    createConfig, signUp, signIn, createEntry, getEntries

}

export default api;