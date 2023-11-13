import herogirl from '../assets/Herogirl.jpeg'

const Footer = () => {
    return (
        <div className='bg-[#002E87]'>
            {/* <p className='font-bold text-5xl text-white pt-28 text-center font-[PayPal sans] '>We provide incredible services that</p>
            <p className='font-bold text-5xl text-white pt-2 text-center '> make paying for electricity easier </p> */}

<div className='flex flex-row text-center justify-center p-16'>
            <div className='mx-32'>
            <p className='font-medium text-3xl text-white pt-16'>ACCUVEND</p>
            {/* <p className='font-medium text-3xl text-white pt-3 '>We ensure that your</p>
            <p className='font-medium text-3xl text-white pt-3 '>meter token is</p>
            <p className='font-medium text-3xl text-white pt-3 '>delivered without fail.</p> */}
            </div>


            <div  className='mx-32'>
            <p className='font-medium text-3xl text-white pt-16'>COMPANY</p>
            <p className='font-medium text-2xl text-white pt-3 '>About</p>
            <p className='font-medium text-2xl text-white pt-3 '>Features</p>
            <p className='font-medium text-2xl text-white pt-3 '>Works</p>
            <p className='font-medium text-2xl text-white pt-3 '>Career</p>
            </div>


            <div  className='mx-32'>
            <p className='font-medium text-3xl text-white pt-16'>HELP</p>
            <p className='font-medium text-2xl text-white pt-3 '>Customer Support</p>
            <p className='font-medium text-2xl text-white pt-3 '>Delivery details</p>
            <p className='font-medium text-2xl text-white pt-3 '>Terms & Conditions</p>
            <p className='font-medium text-2xl text-white pt-3 '>Privacy Policy</p>
            </div>


            <div  className='mx-32'>
            <p className='font-medium text-3xl text-white pt-16'>NEWSLETTER</p>
            <p className='font-light text-xl pt-3 bg-white'>Enter your email address</p>
            <button type="button" className="mt-6 ml-12  bg-[#04BD4B] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Subscribe Now</button>
            </div> 

            </div>

            <hr></hr>
            <p className='text-white text-xl text-center p-3'>Copyright © 2023 All rights reserved by Accuvend.</p>
          
        </div>

    )
}


export default Footer;

