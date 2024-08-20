import { Link } from "react-router-dom";
import {useContext} from 'react'
import { ContextParam } from "../context/context";

const Navbar = ()=> {
  const {toggleTheme,theme} = useContext(ContextParam)
    return (
      <>
      <button onClick={toggleTheme} className="font-bold border border-black padding-2">{
        theme === 'dark' ? "disable dark theme" : "enable dark theme"
        }</button>
        <ul className={`tem-center justify-center flex p-6 ${theme === 'dark' ? 'text-white' : 'text-black'} ${ theme === 'dark' ?  'bg-black' : 'bg-white'} font-bold text-4xl italic`}>
            <li className="p-4">
              <Link to={'/home'}>Home</Link>
            </li>
            <li className="p-4">
              <Link to={'/detail'}>Detail</Link>
            </li>
            <li className="p-4">
              <Link to={'/about'}>About</Link>
            </li>
        </ul>
        </>
    );
};

export default Navbar;