import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import CykaBlyat from "./pages/projects/CykaBlyat"
import Projects from "./pages/projects/Projects"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-blue-600 text-white py-4 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="flex justify-between items-center w-full px-8">
          <h1 className="text-5xl font-bold hover:text-pink-300"><a href="/">DisaroSkell</a></h1>
          <nav className="w-1/4 hidden md:block">
            <ul className="flex justify-around space-x-4">
              <li>
                <a href="/projects" className="text-lg hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-lg hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden flex flex-col justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Open menu"
          >
            <span className="block w-8 h-1 bg-white mb-1 rounded"></span>
            <span className="block w-8 h-1 bg-white mb-1 rounded"></span>
            <span className="block w-8 h-1 bg-white rounded"></span>
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-blue-700 mt-4 px-8 py-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="/projects" className="text-lg hover:underline block" onClick={() => setMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="text-lg hover:underline block" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <div className="flex flex-col h-screen w-screen pt-32 pl-8 pr-8">
        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/projects" element={Projects()} />
          <Route path="/projects/cykablyat" element={CykaBlyat()} />
          <Route path="/contact" element={Contact()} />
        </Routes>
      </div>
    </>
  )
}

export default App
