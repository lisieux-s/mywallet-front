import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import { Entries, Buttons } from './style';
import Entry from './Entry';

import useAuth from '../../hooks/useAuth';
import api from '../../services/api';

import MINUS from '../../assets/minus.png';
import PLUS from '../../assets/plus.png';

export default function Home() {
  const navigate = useNavigate();

  const { auth } = useAuth(); //youll use this to send as req in the get request

  const [entries, setEntries] = useState(null);

  function loadEntries() {
    const promise = api.getEntries(auth.token);
    promise.then((res) => {
      setEntries(res.data);
      console.log(res.data[0])
    });
    promise.catch((res) => console.log(res));
  }

  useEffect(loadEntries, []);

  return (
    <>
      <Header title='Olá, fulano' />
      <Entries entries={entries}>
        <span>
          {entries ?  entries.map(entry => <Entry {...entry}/>) : 'Não há registros de entrada ou saída'}
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
        <button
          onClick={() => {
            navigate(`/new/out`);
          }}
        >
          <img src={MINUS} alt='+' />
          <p>Nova saída</p>
        </button>
      </Buttons>
    </>
  );
}
