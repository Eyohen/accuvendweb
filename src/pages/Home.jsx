import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Provide from "../components/Provide"
import Footer from "../components/Footer"
import Steps from "../components/Steps"

function Home() {
   
  
    return (
      <>
        <div >
        <Navbar/>
        <Hero />
        <Provide/>
        <Steps />
        {/* <Service/> */}
        <Footer/>

        </div>
        </>
    )
}

export default Home;