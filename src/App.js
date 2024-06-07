import React, { useState, useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About.js';
import Work from './Pages/Work';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact.js';

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Optionally, you can add a useEffect to handle loading states or other side effects
  useEffect(() => {
    // Example: setLoading(true) while fetching data
    // setTimeout(() => setLoading(false), 1000); // Simulate a delay
  }, [location]);

  return (
    <>
      {loading && <div>Loading...</div>}
      <Routes location={location}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/work" element={<Work />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
