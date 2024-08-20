import { Link } from "react-router-dom";

const Navbar = ()=> {
    return (
        <ul className="flex items-center justify-center p-4 bg-black text-white">
            <li className="p-3">
              <Link to={'/home'}>Home</Link>
            </li>
            <li className="p-3">
              <Link to={'/about'}>About</Link>
            </li>
        </ul>

    );
};

export default Navbar;