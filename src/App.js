import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BillPage from './pages/BillPage';
import SearchPage from './pages/SearchPage';
import SpeakerPage from './pages/SpeakerPage';
import Header from './components/Base/Header';
import Footer from './components/Base/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/bill" element={<BillPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/speaker" element={<SpeakerPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
