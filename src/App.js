import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BillPage from './pages/BillPage';
import SearchPage from './pages/SearchPage';
import SpeakerPage from './pages/SpeakerPage';
import Header from './components/Base/Header';
import Footer from './components/Base/Footer';
import axios from 'axios';

function App() {
  const callApi = async () => {
    axios.get('/api').then((res) => {
      //console.log(res.data.test);
      console.log(res.data);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <Header />
      <div
        style={{
          height: 'auto',
          minHeight: '100%',
          paddingBottom: '30px',
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/bill/:id" element={<BillPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/speaker/:id" element={<SpeakerPage />} />{' '}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
