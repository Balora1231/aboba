import Navbar from "./Componets/Nav/NavBar";
import Donate from "./Componets/Nav/pages/Donate";
import Home from "./Componets/Nav/pages/Main";
import About from "./Componets/Nav/pages/About";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
      <>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </>
  )
}

export default App
