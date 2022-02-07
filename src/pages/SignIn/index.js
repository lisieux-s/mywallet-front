import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import StyledLink from '../../components/StyledLink';
import api from '../../services/api';

import useAuth from '../../hooks/useAuth';

export default function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const { auth, signIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const promise = api.signIn(form);
    promise.then((res) => {
      signIn(res.data)
      navigate('/home');
    });
    promise.catch();
  }

  return (
    <>
      <div className='logo'>MyWallet</div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='E-mail'
          name='email'
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <input
          type='password'
          placeholder='Senha'
          name='password'
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <button>Entrar</button>
      </form>
      <StyledLink to='/sign-up'>Primeira vez? Cadastre-se!</StyledLink>
    </>
  );
}
