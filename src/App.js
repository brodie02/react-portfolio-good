import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {
  const [currentPage, setCurrentPage] = useState('About')

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    return <Resume />
  }

  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
