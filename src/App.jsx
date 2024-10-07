import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div id='wrapper'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;