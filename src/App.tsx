import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Terminal, Briefcase, GraduationCap, Mail, Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 z-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2">
                <Shield className="w-6 h-6" />
                <span className="font-bold">Uday Awal</span>
              </Link>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1">
                  <Terminal className="w-4 h-4" />
                  <span>Home</span>
                </Link>
                <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1">
                  <GraduationCap className="w-4 h-4" />
                  <span>About</span>
                </Link>
                <Link to="/experience" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1">
                  <Briefcase className="w-4 h-4" />
                  <span>Experience</span>
                </Link>
                <Link to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1">
                  <Terminal className="w-4 h-4" />
                  <span>Projects</span>
                </Link>
                <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center space-x-1">
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <a href="https://github.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/uday-awal" className="hover:text-blue-600 dark:hover:text-blue-400">
                  <Linkedin className="w-5 h-5" />
                </a>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 pt-24 pb-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;