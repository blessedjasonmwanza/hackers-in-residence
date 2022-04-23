import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';        // <-- this is the important line!
import './App.css';
import LandingPage from './components/LandingPage';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <>
      <Router>
        <TopHeader />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
