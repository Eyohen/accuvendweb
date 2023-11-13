import ie from '../assets/ie.png'
import baxi from '../assets/baxi.png'
import buypower from '../assets/buypower.png'
import zenith from '../assets/zenith.png'
import AEDC from '../assets/AEDC.png'

const Service = () => {
    return (
        <div className=''>
            {/* <h1 className='font-bold text-5xl pt-28 text-center font-[PayPal sans] '>Our service Providers</h1> */}

            <div className='flex text-center justify-center px-10 md:px-20 py-10 space-x-20 w-[80%] mx-auto'>
                <div className='space-y-2'>
                    <img src={AEDC} className="" />
                    <p className='text-[36px] font-bold'>AEDC</p>
                </div>

                <div className='space-y-2'>
                    <img src={baxi} className="" />
                    <p className='text-[36px] font-bold'>BAXI</p>
                </div>


                <div className='space-y-2'>
                    <img src={buypower} className="" />
                    <p className='text-[36px] font-bold'>BUYPOWER</p>
                </div>

                <div className='space-y-2'>
                    <img src={ie} className="" />
                    <p className='text-[36px] font-bold'>IKEDC</p>
                </div>

                <div className='space-y-2'>
                    <img src={zenith} className="" />
                    <p className='text-[36px] font-bold'>ZENITH BANK</p>
                </div>
            </div>

        </div>

    )
}


export default Service;

