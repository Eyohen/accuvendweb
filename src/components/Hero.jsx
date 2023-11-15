import Banner from "../images/banner.png";

const Hero = () => {
    return (
        <div className="relative h-96 sm:h-80 md:h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${Banner})` }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>

            {/* Text content */}
            <div className="text-center text-white relative z-10">
                <h1 className='text-4xl lg:text-5xl mb-4 md:mb-6'>
                    Manage Your Utility <br /> Bills with Ease!
                </h1>
                <p className='text-xl lg:text-3xl mb-4 md:mb-6'>
                    Welcome to Accuvend <br /> Online Bill Management <br />Portal
                </p>
            </div>
        </div>
    );
};

export default Hero;
