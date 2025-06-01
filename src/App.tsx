import { Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import CykaBlyat from "./pages/projects/CykaBlyat"
import Projects from "./pages/projects/Projects"

function App() {
  return (
    <>
      <header className="bg-blue-600 text-white py-4 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="flex justify-between items-center w-full px-8">
          <h1 className="text-5xl font-bold"><a href="/">DisaroSkell</a></h1>
          <nav className="w-1/4">
            <ul className="flex justify-around space-x-4">
              <li>
                <a href="/projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="flex flex-col h-screen w-screen pt-32 pl-8 pr-8">
        <Routes>
          <Route path="/" element={Home()} />
          <Route path="/projects" element={Projects()} />
          <Route path="/projects/cykablyat" element={CykaBlyat()} />
          <Route path="/about" element={About()} />
          <Route path="/contact" element={Contact()} />
        </Routes>
      </div>
    </>
  )
}

export default App
