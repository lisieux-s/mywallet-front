import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignIn from './pages/SignIn/index'
import SignUp from './pages/SignUp/index'

export default function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  )
}
