import Navbar from "../components/Navbar"
import Hero2 from "../components/Hero2"
import Provide2 from "../components/Provide2"
import Service from "../components/Service"
import Footer from "../components/Footer"
import Mission from "../components/Mission"
import Drives from "../components/Drives"

function About() {
   
  
    return (
      <>
        <div >
        <Navbar/>
        <Hero2 />
        <Provide2/>
        <Mission/>
        <Drives/>
        {/* <Steps/> */}
        {/* <Service/> */}
        <Footer/>

        </div>
        </>
    )
}

export default About;