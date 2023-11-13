import aboutpic from '../assets/about.jpeg'

const Hero2 = () => {
    return (
        <div style={{backgroundImage:`url(${aboutpic})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '900px',
        }}>
            <p className='font-bold text-5xl text-[#002E87] pt-64 pl-12'>Powering a Sustainable</p>
            <p className='font-bold text-5xl text-[#002E87] pt-3 pl-12'>Future</p>
           

            {/* <button type="button" className="mt-6 ml-12 text-white bg-[#002E87] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Get Started</button> */}
             
          
                {/* <p className='text-white font-medium text-xl bg-[#002E87] rounded-lg p-4 w-24 flex flex-row'>Get Started</p> */}
      
            {/* <img src={herogirl} className="h-[900px] w-full "/> */}
        </div>

    )
}


export default Hero2;

