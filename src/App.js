import React, { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'

import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Hello from './components/pages/Hello';

function App() {
  const [currentPage, setCurrentPage] = useState('Hello')

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
    if (currentPage === 'Resume') {
      return <Resume />
    }
    return <Hello setCurrentPage={setCurrentPage}/>
  }

  return (
    <div className="App">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
