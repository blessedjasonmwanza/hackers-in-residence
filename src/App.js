import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';        // <-- this is the important line!
import './App.css';
import LandingPage from './components/LandingPage';
import Groceries from './components/Groceries';
import TopHeader from './components/TopHeader';
import Beverages from './components/Beverages';

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
            <Route path='/beverages' element={<Beverages />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
