import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';        // <-- this is the important line!
import './App.css';
import LandingPage from './components/LandingPage';
import Groceries from './components/Groceries';
import TopHeader from './components/TopHeader';
import Beverages from './components/Beverages';
import EmergencyContacts from './components/EmergencyContacts';
import BookCanoe from './components/BookCanoe';
import RequestPickup from './components/RequestPickup';

function App() {
  return (
    <>
      <Router basename="/hackers-in-residence">
        <TopHeader />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/book-canoe' element={<BookCanoe />} />
            <Route path="/hackers-in-residence" element={<LandingPage />} />
            <Route path="/emergency-contacts" element={<EmergencyContacts />} />
            <Route path="/request-pickup" element={<RequestPickup />} />
            <Route path="/groceries" element={<Groceries />} />
            <Route path='/beverages' element={<Beverages />} />
            <Route path='*' element={<div><center>Feature coming soon</center></div>} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
