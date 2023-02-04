import React from 'react';
import { Navbar, ManName, Info, Skills, Footer } from './components';
import './app.css';

const App = () => {
  return (
    <div className='App'>
      <div className='container'> 
        <Navbar />
        <ManName />
        <Info />
        <Skills />
        <Footer />
      </div>
    </div>
  )
}

export default App