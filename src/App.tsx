import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Home from "./Pages/Home" 
import Navbar from "./components/Navbar"
import About from './Pages/About'
import Doctors from "./Pages/Doctors" 
import Appointment from "./Pages/Appointment"

const App = () => {

  return (
    <div  className="px-4 md:px-8 lg:px-16 text-[#26292F]">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
          <Route path="/about" element={<About/>}/> 
          <Route path="/doctors" element={<Doctors/>}/>
          <Route path="/appointment" element={<Appointment/>}/>
          </Routes>
      </Router> 
      </div>
  )
}

export default App