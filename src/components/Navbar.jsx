import { useState } from 'react';
import Logo from "../assets/logo.png";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };

    return (
        <div className="">
            <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between w-full">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="h-14 cursor-pointer" />
                    </Link>
                    <span className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={toggleMobileMenu}>
                        <HiBars3 />
                    </span>
                </div>

                <ul className={`md:flex md:items-center z-10 md:static absolute bg-white w-full left-0 
                    md:w-auto md:py-0 py-4 md:pl-0 pl-7 ${showMobileMenu ? 'opacity-100 top-20' : 'opacity-0 top-[-400px]'} 
                    transition-all ease-in duration-500 md:space-x-4 text-sm`}>
                    <li>
                        <Link to='/' className="text-xl hover:text-[#002E87] duration-500 font-medium">Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className="text-xl hover:text-[#002E87] duration-500 font-medium">About Us</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="text-xl hover:text-[#002E87] duration-500 font-medium">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
