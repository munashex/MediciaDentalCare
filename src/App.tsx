import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import Home from "./Pages/Home" 
import Navbar from "./components/Navbar"

const App = () => {

  return (
    <div  className="px-4 md:px-8 lg:px-16">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          </Routes>
      </Router> 
      </div>
  )
}

export default App