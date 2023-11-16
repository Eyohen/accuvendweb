import Navbar from "../components/Navbar"
import customercare from '../assets/customercare.jpeg';
import Footer from "../components/Footer"
import SecondScreen from "../components/SecondScreen"

function Contact() {


    return (
        <>
            <div >
                <Navbar />
                <div className="relative h-96 sm:h-80 md:h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${customercare})` }}></div>
                <SecondScreen />
                <Footer />

            </div>
        </>
    )
}

export default Contact;