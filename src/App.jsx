import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Navbar from '../src/components/Navbar';
import Media from './pages/Media';
import MediaDetails from './pages/MediaDetails';

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen font-sans bg-gray-100">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='md:mt-10 mt-0'
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/media" element={<Media />} />
            <Route path="/media/:id" element={<MediaDetails />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;