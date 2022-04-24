import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';        // <-- this is the important line!
import './App.css';
import LandingPage from './components/LandingPage';
import Groceries from './components/orders/Groceries';
import TopHeader from './components/TopHeader';

function App() {
  return (
    <>
      <Router basename="/hackers-in-residence">
        <TopHeader />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/hackers-in-residence" element={<LandingPage />} />
            <Route path="/groceries" element={<Groceries />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
