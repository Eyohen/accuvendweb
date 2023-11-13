
const Footer = () => {
    return (
        <div className='bg-[#002E87]'>
            <div className='flex justify-between p-16 w-[70%] mx-auto'>
                <div className=''>
                    <p className='font-medium text-3xl text-white'>ACCUVEND</p>
                </div>


                <div className="flex items-start justify-between gap-8">
                    <div className=''>
                        <p className='font-medium text-3xl text-white'>COMPANY</p>
                        <p className='font-medium text-2xl text-white pt-3 '>About</p>
                        <p className='font-medium text-2xl text-white pt-3 '>Features</p>
                        <p className='font-medium text-2xl text-white pt-3 '>Works</p>
                        <p className='font-medium text-2xl text-white pt-3 '>Career</p>
                    </div>


                    <div className=''>
                        <p className='font-medium text-3xl text-white'>HELP</p>
                        <p className='font-medium text-2xl text-white pt-3 '>Customer Support</p>
                        <p className='font-medium text-2xl text-white pt-3 '>Delivery details</p>
                        <p className='font-medium text-2xl text-white pt-3 '>Terms & Conditions</p>
                        <p className='font-medium text-2xl text-white pt-3 '>Privacy Policy</p>
                    </div>


                    <div className='flex flex-col gap-4'>
                        <p className='font-medium text-3xl text-white'>NEWSLETTER</p>
                        <input className='font-light rounded-md px-3 py-2 placeholder:text-black focus:outline-none bg-white' placeholder="Enter your email address" />
                        <button type="button" className="bg-[#04BD4B] font-medium rounded-xl text-lg px-4 py-2.5 text-white">Subscribe Now</button>
                    </div>
                </div>

            </div>

            <hr></hr>
            <p className='text-white text-xl text-center p-3'>Copyright © 2023 All rights reserved by Accuvend.</p>

        </div>

    )
}


export default Footer;

