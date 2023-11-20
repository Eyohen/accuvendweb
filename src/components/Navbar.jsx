import { useState } from 'react';
import Logo from "../assets/logo.png";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <div className="">
            <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between w-full">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="h-14 cursor-pointer" />
                    </Link>
                    <button onClick={() => setMobileNavOpen((prev) => !prev)} className="text-3xl cursor-pointer mx-2 md:hidden block">
                        <HiBars3 />
                    </button>
                </div>

                <ul className="md:flex md:items-center space-x-4 hidden">
                    <li>
                        <Link to='/' className="hover:text-white hover:bg-[#002E87] px-3 py-3 rounded-full text-xl duration-500 font-medium">Home</Link>
                    </li>
                    <li>
                        <Link to='/about' className="hover:text-white hover:bg-[#002E87] px-3 py-3 rounded-full text-xl duration-500 font-medium">About</Link>
                    </li>
                    <li>
                        <Link to='/contact' className="hover:text-white hover:bg-[#002E87] px-3 py-3 rounded-full text-xl duration-500 font-medium">Contact</Link>
                    </li>
                </ul>
            </nav>
            {mobileNavOpen && (
                <nav className="bg-white flex-col space-y-2 w-full z-20 px-8 pt-2 pb-4 md:hidden">
                    <hr />
                    <div className='hover:text-white hover:bg-[#002E87] px-4 py-2 transition-colors duration-0 rounded-lg'>
                        <Link to='/' className="text-xl duration-500 font-medium">Home</Link>
                    </div>
                    <hr />
                    <div className='hover:text-white hover:bg-[#002E87] px-4 py-2 transition-colors duration-0 rounded-lg'>
                        <Link to='/about' className="text-xl duration-500 font-medium">About</Link>
                    </div>
                    <hr />
                    <div className='hover:text-white hover:bg-[#002E87] px-4 py-2 transition-colors duration-0 rounded-lg'>
                        <Link to='/contact' className="text-xl duration-500 font-medium">Contact</Link>
                    </div>
                    <hr />
                </nav>
            )}
        </div>
    );
};

export default Navbar;
