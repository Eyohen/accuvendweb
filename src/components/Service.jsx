import herogirl from '../assets/Herogirl.jpeg'
// import ie from '../assets/ie.png'
import ie from '../assets/ie.png'
import baxi from '../assets/baxi.png'
import buypower from '../assets/buypower.png'
import zenith from '../assets/zenith.png'
import AEDC from '../assets/AEDC.png'

const Service = () => {
    return (
        <div className='bg-gray-200'>
            <h1 className='font-bold text-5xl pt-28 text-center font-[PayPal sans] '>Our service Providers</h1>
            {/* <p className='font-bold text-5xl text-white pt-2 text-center '> make paying for electricity easier </p> */}

            <div className='flex flex-row text-center justify-center p-24'>
                <div className='mx-16 bg-white rounded-lg p-4'>
                    <img src={AEDC} className="h-48 w-64  " />
                </div>

                <div className='mx-16 bg-white rounded-lg p-2'>
                    <img src={baxi} className="h-64 w-64  " />
                </div>


                <div className='mx-16 bg-white rounded-lg'>
                    <img src={buypower} className="h-64 w-64 " />
                </div>

                <div className='mx-16 bg-white rounded-lg p-2'>
                    <img src={ie} className="h-64 w-64 " />
                </div>

                <div className='mx-16 bg-white rounded-lg p-2'>
                    <img src={zenith} className="h-64 w-64 " />
                </div>




                {/* <div className='mx-16'>
            <p className='font-medium text-3xl text-white pt-16 text-[#04BD4B] '>100% Reliable</p>
            <p className='font-medium text-3xl text-white pt-3 '>We ensure that your</p>
            <p className='font-medium text-3xl text-white pt-3 '>meter token is</p>
            <p className='font-medium text-3xl text-white pt-3 '>delivered without fail.</p>
            </div>


            <div  className='mx-16'>
            <p className='font-medium text-3xl text-white pt-16 text-[#04BD4B] '>Easy Access</p>
            <p className='font-medium text-3xl text-white pt-3 '>We provide instant</p>
            <p className='font-medium text-3xl text-white pt-3 '>access to your</p>
            <p className='font-medium text-3xl text-white pt-3 '>payment</p>
            </div>


            <div  className='mx-16'>
            <p className='font-medium text-3xl text-white pt-16 text-[#04BD4B] '>Safe & Secure</p>
            <p className='font-medium text-3xl text-white pt-3 '>The protection of</p>
            <p className='font-medium text-3xl text-white pt-3 '>customer data is a</p>
            <p className='font-medium text-3xl text-white pt-3 '>priority for us</p>
            </div>


            <div  className='mx-16'>
            <p className='font-medium text-3xl text-white pt-16 text-[#04BD4B] '>Outstanding</p>
            <p className='font-medium text-3xl text-white pt-3 '>We provide our</p>
            <p className='font-medium text-3xl text-white pt-3 '>clients with superb</p>
            <p className='font-medium text-3xl text-white pt-3 '>customers service</p>
            </div>  */}

            </div>

        </div>

    )
}


export default Service;

