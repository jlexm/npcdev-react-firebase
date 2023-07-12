import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import Navbar from './components/layout/navbar';
import LandingPage from './pages/landing';
import AboutPage from './pages/about';
import CanteenPage from './pages/canteen';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/home' element={<HomePage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/canteen' element={<CanteenPage />}></Route>
      </Routes>
    </>
   
  );
}

export default App;
