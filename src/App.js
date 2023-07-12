import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home';
import Navbar from './components/layout/navbar';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </>
   
  );
}

export default App;
