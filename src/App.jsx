import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import { User, TrendingUp, Layout, Mail, FileText } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
// import styles from "./index.css"

const navItems = [
  { label: 'About', icon: <User className="text-teal-600 w-5 h-5" /> },
  { label: 'Experience', icon: <TrendingUp className="text-cyan-500 w-5 h-5" /> },
  { label: 'Projects', icon: <Layout className="text-indigo-600 w-5 h-5" /> },
  { label: 'Contact', icon: <Mail className="text-amber-800 w-5 h-5" /> },
  { label: 'Resume', icon: <FileText className="text-gray-600 w-5 h-5" />, external: true, href: 'https://drive.google.com/file/d/1OA9VGYDw1VF0fjaeg0qsNs_48PMZ02pz/view?usp=sharing' },
];

export default function App() {
  return (
    
   <BrowserRouter>
      <div className="flex h-screen">
        {/* Sidebar */}
        <nav className="w-64 bg-white border-r h-full p-6 flex flex-col text-sm shadow-md">
          {/* Header */}
          <div className="mb-10">
            <Link to="/" className="text-3xl font-light text-teal-700 leading-tight">Varsha<br />Vishwakarma</Link>
            <p className="text-sm text-green-500 mt-1">Full Stack Developer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-5">
            {navItems.map(({ label, icon, external, href }) => (
               external ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-2 py-1 rounded text-gray-700 hover:text-teal-700 hover:font-semibold"
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ) : (
              <NavLink
                key={label}
                to={`/${label.toLowerCase()}`}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-2 py-1 rounded hover:text-teal-700 hover:font-semibold ${
                    isActive ? 'text-teal-700 font-bold' : 'text-gray-700'
                  }`
                }
              >
                {icon}
                <span>{label}</span>
              </NavLink>
              )
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Add more routes here if needed */}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
