import AppIcon from '../../assets/images/icon.png'
import './navbar.css'

export default function Navbar() {
  return (
      <nav className='flex bg-primary items-center justify-around p-3 shadow-xl text-white'>
        <ul className='flex gap-5'>
          <li><a className='flex items-center' href="/"> <img src={AppIcon} alt="App Icon" className="w-[75px] h-[50px]"/> Food-Dash </a></li>
        </ul>
        <ul className='flex gap-5'>
           <li><a href="/home">Home</a></li>
           <li><a href="/canteens">Canteens</a></li>  
           <li><a href="/about">About us</a></li>
        </ul>

        <ul className='flex gap-5 text-sm'>
          <li><a href="/login">Login</a></li>
          <li><a href="/register">Register</a></li>
        </ul> 
      </nav>
  );
}