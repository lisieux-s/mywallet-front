import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import StyledLink from '../../components/StyledLink';

import api from '../../services/api'

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name:'', email: '', password: '', confirmPassword: '' });

  async function handleSubmit(e) {
    e.preventDefault()
    const promise = api.signUp({...form})
    promise.then(() => {navigate('/')})
    promise.catch()
    
  }

  return (
    <>
      <div className='logo'>MyWallet</div>
      <form onSubmit={handleSubmit}>
      <input
          type='text'
          placeholder='Nome'
          name='name'
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
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
        <input
          type='password'
          placeholder='Confirme a senha'
          name='confirmPassword'
          value={form.confirmPassword}
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
        />
        <button>Cadastrar</button>
      </form>
      <StyledLink to='/'>Já tem uma conta? Entre agora!</StyledLink>
    </>
  );
}
