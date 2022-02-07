import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Header from '../../components/Header';
import { Entries, Buttons } from './style';

import useAuth from '../../hooks/useAuth'

import MINUS from '../../assets/minus.png';
import PLUS from '../../assets/plus.png';

export default function Home() {
  const navigate = useNavigate();

    const { auth } = useAuth(); //youll use this to send as req in the get request
  const [entriesFound, setEntriesFound] = useState(false);

  return (
    <>
      <Header title='Olá, fulano' />
      <Entries entriesFound={entriesFound}>
        <span>
          {entriesFound ? 'ayyy lmao' : 'Não há registros de entrada ou saída'}
        </span>
      </Entries>
      <Buttons>
        <button
          onClick={() => {
            navigate(`/new/in`);
          }}
        >
          <img src={PLUS} alt='+' />
          <p>Nova entrada</p>
        </button>
        <button onClick={() => navigate(`/new/out`)}>
          <img src={MINUS} alt='+' />
          <p>Nova saída</p>
        </button>
      </Buttons>
    </>
  );
}
