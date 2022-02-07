import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../../components/Header';
import { Entries, Buttons, Total } from './style';
import Entry from './Entry';

import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
import api from '../../services/api';

import MINUS from '../../assets/minus.png';
import PLUS from '../../assets/plus.png';

export default function Home() {
  const navigate = useNavigate();

  const { auth } = useAuth();
  const { user } = useUser();

  const [entries, setEntries] = useState(null);
  const [total, setTotal] = useState(0);
  const valuesArr = [];

  function calculateTotal(entries) {
    entries.map((entry) => {
      valuesArr.push(parseInt(entry.value));
    });
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    setTotal(valuesArr.reduce(reducer));
  }

  function loadEntries() {
    const promise = api.getEntries(auth);
    promise.then((res) => {
      setEntries(res.data);

      calculateTotal(res.data);
    });
    promise.catch((res) => console.log(res));
  }

  useEffect(loadEntries, []);

  return (
    <>
      <Header title={`Olá, ${user}`} />
      <Entries entries={entries}>
        <span>
          {entries
            ? entries.map((entry) => <Entry {...entry} />)
            : 'Não há registros de entrada ou saída'}
        </span>
        <span>
          {entries ? (
            <Total>
              <p>SALDO</p>
              <p class='value' total={total}>
                {total}
              </p>
            </Total>
          ) : (
            ''
          )}
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
