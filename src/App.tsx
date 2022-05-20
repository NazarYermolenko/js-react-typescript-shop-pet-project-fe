import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutPage } from './components/aboutPage/AboutPage';
import HomePage from './components/home_page/HomePage';
import { NotFoundPage } from './components/not_found_page/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>

  );
}

export default App;
