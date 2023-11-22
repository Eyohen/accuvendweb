import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ArrowIcon from '../components/icons/arrow';
import Banner from "../images/banner.png";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="relative h-96 sm:h-80 md:h-96 bg-cover bg-center flex flex-col items-center justify-center px-4 sm:px-8" style={{ backgroundImage: `url(${Banner})` }}>
                {/* Background image */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Text content */}
                <div className="text-center text-white relative z-10">
                    <h1 className='text-4xl lg:text-5xl mb-2'>
                        Manage Your Utility Bills with Ease!
                    </h1>
                    <p className='lg:text-xl'>
                        Welcome to Accuvend Online Bill ManagementPortal
                    </p>
                </div>
            </div>


            {/* provide */}
            <div className='px-2 md:px-0 py-20'>
                <h1 className='text-[30px] px-6 md:px-0 md:text-center font-big'>We provide efficient services that make <br />
                    paying for electricity easier.</h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center px-4 md:px-24'>
                    <div className='mx-2 md:mx-0'>
                        <p className='font-medium text-3xl pt-16 text-[#04BD4B] md:text-center'>100% Reliable</p>
                        <p className=''>We ensure that your meter token is delivered without fail.</p>
                    </div>

                    <div className='mx-2 md:mx-0'>
                        <p className='font-medium text-3xl pt-16 text-[#04BD4B] md:text-center'>Easy Access</p>
                        <p className=''>We provide instant access to your historical payments.</p>
                    </div>

                    <div className='mx-2 md:mx-0'>
                        <p className='font-medium text-3xl pt-16 text-[#04BD4B] md:text-center'>Safe & Secure</p>
                        <p className=''>The protection of customer data is a priority for us.</p>
                    </div>
                </div>
            </div>

            {/* steps */}
            <div className='bg-gray-200 py-20'>
                <p className='text-[40px] pb-10 text-center'>Steps to <span className='text-[#04BD4B]'>Purchase</span> Electricity</p>
                <div>
                    <div className="flex flex-col items-center px-4 container justify-center gap-8 mx-auto lg:flex-row lg:items-center lg:justify-center">
                        <div className="flex flex-col items-center lg:flex lg:flex-col lg:items-center lg:mb-8">
                            <svg className="w-[100px] h-[200px] md:w-[180px] md:h-[240px] mb-4 lg:mb-0" viewBox="0 0 236 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="118.325" cy="113.5" rx="117.668" ry="113.5" fill="#04BD4B" fillOpacity="0.39" style={{ fill: 'color(display-p3 0.0157 0.7412 0.2941)', fillOpacity: '0.39' }} />
                                <g clipPath="url(#clip0_849_4102)">
                                    <path d="M99.1661 131.906C97.5411 133.529 97.5409 136.159 99.166 137.782C99.9786 138.595 101.04 139 102.104 139C103.168 139 104.23 138.595 105.043 137.782L129.592 112.585L105.043 87.3859C103.42 85.7628 100.789 85.7628 99.166 87.3859C97.5409 89.0089 97.5409 91.6398 99.166 93.2628L114.199 108.298H34.1353C31.8389 108.298 29.979 110.16 29.979 112.454C29.979 114.749 31.8389 116.611 34.1353 116.611H114.461L99.1661 131.906ZM154.708 46H79.8956C75.3029 46 71.5809 49.7219 71.5809 54.3125V91.7188H79.9495V59.381C79.9495 56.6047 82.2022 54.352 84.9785 54.352H149.492C152.272 54.352 154.521 56.6047 154.521 59.381L154.652 165.663C154.652 168.439 152.403 170.692 149.623 170.692H84.9806C82.2042 170.692 79.9515 168.439 79.9515 165.663V133.144L71.5829 133.154V170.688C71.5829 175.278 75.3049 179 79.8976 179H154.71C159.301 179 163.023 175.278 163.023 170.688V54.3125C163.021 49.7219 159.299 46 154.708 46Z" fill="black" style={{ fill: 'black', fillOpacity: 1 }} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_849_4102">
                                        <rect width={133} height={133} fill="white" style={{ fill: 'white', fillOpacity: 1 }} transform="translate(30 46)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Login to banking app</p>
                        </div>

                        <div className="hidden lg:flex">
                            <ArrowIcon />
                        </div>

                        <div className="flex flex-col items-center lg:flex lg:flex-col lg:items-center lg:mb-8">
                            <svg className="w-[100px] h-[200px] md:w-[180px] md:h-[240px] mb-4 lg:mb-0" viewBox="0 0 236 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="117.661" cy="113.5" rx="117.668" ry="113.5" fill="#04BD4B" fillOpacity="0.39" style={{ fill: 'color(display-p3 0.0157 0.7412 0.2941)', fillOpacity: '0.39' }} />
                                <path d="M128.245 163.375H72.828C69.8885 163.375 67.0694 162.207 64.9909 160.129C62.9123 158.05 61.7446 155.231 61.7446 152.292V74.7083C61.7446 71.7689 62.9123 68.9498 64.9909 66.8712C67.0694 64.7927 69.8885 63.625 72.828 63.625H161.495C164.434 63.625 167.253 64.7927 169.332 66.8712C171.41 68.9498 172.578 71.7689 172.578 74.7083V130.125" stroke="#003213" style={{ stroke: 'color(display-p3 0.0000 0.1958 0.0752)', strokeOpacity: 1 }} strokeWidth="8.3125" strokeLinecap="round" />
                                <path d="M61.7446 85.792H172.578M78.3696 74.7641L78.425 74.7031M94.9946 74.7641L95.05 74.7031M111.62 74.7641L111.675 74.7031" stroke="#003213" style={{ stroke: 'color(display-p3 0.0000 0.1958 0.0752)', strokeOpacity: 1 }} strokeWidth="8.3125" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M173.033 148.773C175.771 150.457 175.604 154.553 172.784 154.868L158.564 156.487L152.18 169.299C150.916 171.837 147.009 170.596 146.361 167.448L139.406 133.555C138.863 130.895 141.252 129.222 143.562 130.646L173.033 148.773Z" stroke="#003213" style={{ stroke: 'color(display-p3 0.0000 0.1958 0.0752)', strokeOpacity: 1 }} strokeWidth="8.3125" />
                            </svg>
                            <p>Select Accuvend</p>
                        </div>

                        <div className="hidden lg:flex">
                            <ArrowIcon />
                        </div>

                        <div className="flex flex-col items-center lg:flex lg:flex-col lg:items-center">
                            <svg className="w-[100px] h-[200px] md:w-[180px] md:h-[240px] mb-4 lg:mb-0" viewBox="0 0 236 227" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <ellipse cx="117.996" cy="113.5" rx="117.668" ry="113.5" fill="#04BD4B" fillOpacity="0.39" style={{ fill: 'color(display-p3 0.0157 0.7412 0.2941)', fillOpacity: '0.39' }} />
                                <path d="M80.7764 95.625H88.6514M88.6514 95.625H96.5264M88.6514 95.625V132.375M88.6514 132.375H80.7764M88.6514 132.375H96.5264M75.5264 82.5H159.526C162.311 82.5 164.982 83.6062 166.951 85.5754C168.92 87.5445 170.026 90.2152 170.026 93V135C170.026 137.785 168.92 140.455 166.951 142.425C164.982 144.394 162.311 145.5 159.526 145.5H75.5264C72.7416 145.5 70.0709 144.394 68.1017 142.425C66.1326 140.455 65.0264 137.785 65.0264 135V93C65.0264 90.2152 66.1326 87.5445 68.1017 85.5754C70.0709 83.6062 72.7416 82.5 75.5264 82.5Z" stroke="#003213" style={{ stroke: 'color(display-p3 0.0000 0.1958 0.0752)', strokeOpacity: 1 }} strokeWidth="7.875" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>Enter meter number</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;