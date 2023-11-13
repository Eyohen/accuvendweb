import Logo from "../assets/logo.png";
import { HiBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between w-full">
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-[Poppins] cursor-pointer">
                        <img src={Logo} className="h-14 inline" />
                    </span>
                    <span className="text-3xl cursor-pointer mx-2 md:hidden block">
                        <div className="name"><HiBars3 /></div>

                    </span>
                </div>

                <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white 
            w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0
            top-[-400px] transition-all ease-in duration-500 space-x-4 text-sm
            ">
                    <Link to='/'>
                        <li className=" my-6 md:my-0">
                            <a href="#" className="text-xl hover:text-[#002E87] duration-500 font-medium">Home</a>
                        </li>

                    </Link>

                    <Link to='/about'>
                        <li className="">
                            <a href="#" className="text-xl hover:text-[#002E87] duration-500 font-medium">About Us</a>
                        </li>
                    </Link>

                    <Link to='/contact'>
                        <li className="">
                            <a href="#" className="text-xl hover:text-[#002E87] duration-500 font-medium">Contact Us</a>
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
