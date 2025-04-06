import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <header className="bg-blue-600 text-white py-4 shadow-md fixed top-0 left-0 w-full z-10">
        <div className="flex justify-between items-center w-full px-8">
          <h1 className="text-2xl font-bold"><a href="/">DisaroSkell</a></h1>
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
      <div className='mainContent'>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/projects" element={<h1>Projects Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
          <Route path="/contact" element={<h1>Contact Page</h1>} />
        </Routes>
      </div>
      <footer className='bg-blue-300 text-white text-center py-3 shadow-md fixed bottom-0 left-0 w-full z-10'>
        whatever
      </footer>
    </>
  )
}

export default App
