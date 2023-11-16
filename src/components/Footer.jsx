import Logo from "../images/logo.png";

const Footer = () => {
    return (
        <div className='bg-[#002E87] pt-16'>
            <div className='flex flex-col lg:flex-row justify-between gap-6 xl:gap-0 lg:items-start w-5/6 md:w-[70%] mx-auto'>
                <div className=''>
                    <img src={Logo} alt="Logo" className='w-32' />
                </div>

                <div className='flex flex-col lg:flex-row justify-between gap-6 lg:text-left'>
                    <div className='mb-8 lg:mb-0'>
                        <p className='font-medium text-2xl text-white'>COMPANY</p>
                        <div className="space-y-2 mt-1">
                            <p className='font-medium text-xl text-white '>About</p>
                            <p className='font-medium text-xl text-white '>Features</p>
                            <p className='font-medium text-xl text-white '>Works</p>
                            <p className='font-medium text-xl text-white '>Career</p>
                        </div>
                    </div>

                    <div className='mb-8 lg:mb-0'>
                        <div className="space-y-2 mt-1">
                            <p className='font-medium text-2xl text-white'>HELP</p>
                            <p className='font-medium text-xl text-white '>Customer Support</p>
                            <p className='font-medium text-xl text-white '>Delivery details</p>
                            <p className='font-medium text-xl text-white '>Terms & Conditions</p>
                            <p className='font-medium text-xl text-white '>Privacy Policy</p>
                        </div>
                    </div>

                    <div className='flex flex-col w-fit space-y-2 mb-8 lg:mb-0'>
                        <p className='font-medium text-2xl text-white'>NEWSLETTER</p>
                        <input className='font-light rounded-md px-3 py-2 placeholder:text-black focus:outline-none bg-white' placeholder="Enter your email address" />
                        {/* <button type="button" className="bg-[#04BD4B] font-medium rounded-xl text-lg px-4 py-2.5 text-white">Subscribe Now</button> */}
                    </div>
                </div>
            </div>

            <hr className='border-white mt-10 w-3/4 mx-auto' />
            <p className='text-white text-xl text-center px-3 md:px-0 py-5'>Copyright © 2023 All rights reserved by Accuvend.</p>
        </div>
    );
};

export default Footer;
