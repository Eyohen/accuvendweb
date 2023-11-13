
// import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Provide from './components/Provide'
import Steps from './components/Steps'
import Footer from './components/Footer'
import Service from './components/Service'
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact'


function App() {
 

  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/partner-dashboard" element={<PartnerDashboard />} />
      <Route path="/transaction/details/:id" element={<TransactionDetails />} />
      <Route path="/partner/transaction/details/:id" element={<PartnerTransactionDetails />} /> */}
    </Routes>
  );
}

export default App
