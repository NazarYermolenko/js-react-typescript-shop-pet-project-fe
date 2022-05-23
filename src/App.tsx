import { Route, Routes } from 'react-router-dom';
import { AboutPage } from './components/aboutPage/AboutPage';
import HomePage from './components/home_page/HomePage';
import { NotFoundPage } from './components/not_found_page/NotFoundPage';
import { SignInRegisterPage } from './components/sing_in_register_page/SignInRegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path="/sign_in" element={<SignInRegisterPage />}/>
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  );
}

export default App;
