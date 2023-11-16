import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-[#002E87] pt-16'>
            <div className='flex flex-col lg:flex-row justify-between gap-6 xl:gap-0 lg:items-start px-4 md:px-0 md:w-4/6 mx-auto'>
                <div className=''>
                    <img src={Logo} alt="Logo" className='w-32' />
                </div>

                <div className='flex flex-col lg:flex-row justify-between gap-6 lg:text-left'>
                    <div className='mb-8 lg:mb-0'>
                        <p className='font-medium text-2xl text-white'>COMPANY</p>
                        <div className="space-y-2">
                            <p className='font-medium text-xl text-white '>
                                <Link to="/about">About Us</Link>
                            </p>
                            <p className='font-medium text-xl text-white '>
                                <Link to="/contact">Contact Us</Link>
                            </p>
                            <p className='font-medium text-xl text-white '>
                                <Link to="/works">Works</Link>
                            </p>
                            <p className='font-medium text-xl text-white '>
                                <Link to="/career">Career</Link>
                            </p>
                        </div>
                    </div>

                    <div className='mb-8 lg:mb-0'>
                        <div className="space-y-2">
                            <p className='font-medium text-2xl text-white'>HELP</p>
                            <p className='font-medium text-xl text-white '>
                                <Link to="/customer-support">Customer Support</Link>
                            </p>
                            <p className='font-medium text-xl text-white '>
                                <Link to="/delivery">Delivery details</Link>
                            </p>
                            <p className='font-medium text-xl text-white '>
                                <Link to="/terms">Terms & Conditions</Link>
                            </p>
                            <p className='font-medium text-xl text-white '>
                                <Link to="/privacy">Privacy Policy</Link>
                            </p>
                        </div>
                    </div>

                    {/* <div className='flex flex-col w-fit space-y-2 mb-8 lg:mb-0'>
                        <p className='font-medium text-2xl text-white'>NEWSLETTER</p>
                        <input className='font-light rounded-md px-3 py-2 placeholder:text-black focus:outline-none bg-white' placeholder="Enter your email address" />
                        <button type="button" className="bg-[#04BD4B] font-medium rounded-xl text-lg px-4 py-2.5 text-white">Subscribe Now</button>
                    </div> */}
                </div>
            </div>

            <hr className='border-white mt-10 w-3/4 mx-auto' />
            <p className='text-white text-xl text-center px-3 md:px-0 py-5'>Copyright © 2023 All rights reserved by Accuvend.</p>
        </div>
    );
};

export default Footer;
