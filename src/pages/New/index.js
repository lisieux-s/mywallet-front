import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../../components/Header";

import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

export default function New() {
    const navigate = useNavigate();

    const { auth } = useAuth();
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    const type = useParams().type;

    function handleCreateEntry(e) {
        e.preventDefault();
        const time = Date.now()

        const promise = api.createEntry({ type, value, description, time }, auth)
        promise.then(() => navigate('/home'))
        promise.catch()
    }

    return(
        <>
        <Header title={type === 'in' ? 'Nova entrada' : 'Nova saída'}/>
        <form onSubmit={handleCreateEntry}>
            <input 
            type='text'
                placeholder="Valor" 
                value={value}
                onChange={(e) => setValue(e.target.value)}

            />
            <input 
            type='text'
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Salvar {type === 'in' ? 'entrada' : 'saída'}</button>
        </form>
        </>
    )
}