import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Provide from "../components/Provide"
import Service from "../components/Service"
import Footer from "../components/Footer"

function Home() {
   
  
    return (
      <>
        <div >
        <Navbar/>
        <Hero />
        <Provide/>
        {/* <Steps/> */}
        <Service/>
        <Footer/>

        </div>
        </>
    )
}

export default Home;