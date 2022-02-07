import axios from "axios";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";

export default function New() {
    const type = useParams().type;

    return(
        <>
        <Header title={type === 'in' ? 'Nova entrada' : 'Nova saída'}/>
        <form>
            <input 
                placeholder="Valor"    
            />
            <input 
                placeholder="Descrição"
            />
            <button>Salvar {type === 'in' ? 'entrada' : 'saída'}</button>
        </form>
        </>
    )
}