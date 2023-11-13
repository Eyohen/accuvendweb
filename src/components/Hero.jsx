import Banner from "../images/banner.png"

const Hero = () => {
    return (
        <div style={{
            backgroundImage: `url(${Banner})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '900px',
        }}>
            <div className="text-right px-10">
                <p className='font-bold text-5xl text-white pt-64 '>Manage Your Utility</p>
                <p className='font-bold text-5xl text-white pt-3 '>Bills with Ease!</p>
                <p className='font-medium text-5xl text-white pt-12 '>Welcome to Accuvend</p>
                <p className='font-medium text-5xl text-white pt-3 '>Online Bill Management <br/>Portal</p>
            </div>
        </div>

    )
}


export default Hero;

