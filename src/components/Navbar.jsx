// import { ChevronDown } from "lucide-react";
// import ProfilePic from "../images/profile-pic.png";
import Logo from "../assets/logo.png";
import { HiBars3,HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        // <div className="text-body1 border-b border-body1/80">
        //     <div className="h-[121px] px-8 md:px-10 flex items-center justify-between mx-auto">
        //         <a href="/dashboard" className="">
        //             <img src={Logo} className="hidden sm:block aspect-auto"/>
        //             <img src={Logo} className="sm:hidden w-32 h-10 aspect-auto"/>
        //         </a>
        //         <div className="flex items-center justify-between ml-auto space-x-10 sm:space-x-16 md:space-x-[72px]">
        //             <a href="#">HELP</a>
        //             <a href="#">SECURITY CENTER</a>
        //             <div className="flex items-center">
        //                 {/* <img src={ProfilePic} alt="profile picture" className="h-10 w-10" /> */}
        //                 <a href="#" className="ml-2">
        //                     Admin 1
        //                 </a>
        //                 {/* <ChevronDown className="h-4 w-4 ml-2" /> */}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
        <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between w-full">
            <div className="flex justify-between items-center">
                <span className="text-2xl font-[Poppins] cursor-pointer">
                <img src={Logo} className="h-10 inline"/>
                </span>

                <span className="text-3xl cursor-pointer mx-2 md:hidden block">
              <div  className="name"><HiBars3/></div>
                
                </span>


                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg> */}

            </div>

            <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white 
            w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0
            top-[-400px] transition-all ease-in duration-500
            ">

            <Link to='/'>
            <li className="mx-16 my-6 md:my-0">
                    <a href="#" className="text-xl hover:text-[#002E87] duration-500 font-medium">Home</a>
                </li>

            </Link>
                
               <Link to='/about'>
               <li className="mx-16">
                    <a href="#" className="text-xl hover:text-[#002E87] duration-500 font-medium">About Us</a>
                </li>
               </Link>


               <Link to='/contact'>
                <li className="mx-16">
                    <a href="#" className="text-xl hover:text-[#002E87] duration-500 font-medium">Contact Us</a>
                </li>
                </Link>

            </ul>

        </nav>

        {/* <script>
            function Menu(e) {
                e. === 'menu' ? e.name = ""
            }

        </script> */}
     
        </div>
    );
};

export default Navbar;
