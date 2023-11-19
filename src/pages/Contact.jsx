import Navbar from "../components/Navbar"
import customercare from '../assets/customercare.jpeg';
import Footer from "../components/Footer"
import SecondScreen from "../components/SecondScreen"

function Contact() {


    return (
        <>
            <div >
                <Navbar />
                <div className="relative h-96 sm:h-80 md:h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${customercare})` }}>
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black opacity-60"></div>

                    {/* Text content */}
                    <div className="text-center text-white relative z-10">
                        <p className='text-4xl lg:text-5xl'>Get in touch</p>
                    </div>
                </div>
                <SecondScreen />
                <Footer />

            </div>
        </>
    )
}

export default Contact;