import React from 'react'
import { NavLink } from 'react-router-dom'
import 'animate.css/animate.min.css';

export default function LandingPage() {
  return (
    <div className="animate__animated animate__zoomIn animate__slower">
        <br />
        <NavLink to='/pickup' className='home-list'>
            Request PickUp
        </NavLink>
        <NavLink to='/submit-budget' className='home-list'>
            Submit Budget
        </NavLink>
        <NavLink to='/book-canoe' className='home-list'>
            Book Canoe ride
        </NavLink>
    </div>
  )
}
