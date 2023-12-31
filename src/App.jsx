
import Home from './pages/Home'
import About from './pages/About'
import { Routes, Route } from "react-router-dom";
import Contact from './pages/Contact'
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';


function App() {


    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
    );
}

export default App
