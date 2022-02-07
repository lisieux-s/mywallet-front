import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn/index';
import SignUp from './pages/SignUp/index';
import Home from './pages/Home/index';
import New from './pages/New/index';

import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          <Route path='/new/:type' element={<New />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
