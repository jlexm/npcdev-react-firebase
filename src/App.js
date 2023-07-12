import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import Navbar from './components/layout/navbar';
import LandingPage from './pages/landing';
import AboutPage from './pages/about';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>

      </Routes>
    </>
   
  );
}

export default App;
