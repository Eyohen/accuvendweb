import herogirl from '../assets/Herogirl.jpeg'

const Hero = () => {
    return (
        <div style={{
            backgroundImage: `url(${herogirl})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '900px',
        }}>
            <p className='font-bold text-5xl text-white pt-64 pl-12'>Manage Your Utility</p>
            <p className='font-bold text-5xl text-white pt-3 pl-12'>Bills with Ease!</p>
            <p className='font-medium text-5xl text-white pt-12 pl-12'>Welcome to Accuvend</p>
            <p className='font-medium text-5xl text-white pt-3 pl-12'>Online Bill Management Portal</p>

            <button type="button" className="mt-6 ml-12 text-white bg-[#002E87] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button>


            {/* <p className='text-white font-medium text-xl bg-[#002E87] rounded-lg p-4 w-24 flex flex-row'>Get Started</p> */}

            {/* <img src={herogirl} className="h-[900px] w-full "/> */}
        </div>

    )
}


export default Hero;

