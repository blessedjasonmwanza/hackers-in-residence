import React from 'react'
import { NavLink } from 'react-router-dom'
import 'animate.css/animate.min.css';
import groceries from '../assets/img/groceries.png';
import beverages from '../assets/img/beverages.png';
import exercise from '../assets/img/exercise-run.png';
import party from '../assets/img/party.png';
export default function LandingPage() {
  return (
    <>
      <div className="animate__animated animate__zoomIn">
        <br />
        <NavLink to='emergency-contacts' className='home-list'>
          Emergency Contacts
        </NavLink>  
        <NavLink to='book-canoe' className='home-list'>
          Book Canoe ride
        </NavLink>
        <NavLink to='request-pickup' className='home-list'>
          Request PickUp
        </NavLink>
        <NavLink to='feature-request' className='home-list'>
          Feature request
        </NavLink>
      </div>
      <div className='cards animate__animated animate__zoomIn animate__slow'>
        <NavLink to="groceries" className='card'>
          <img src={groceries} alt="Groceries" className='card-img animate__animated  animate__swing  animate__slower' />
          <div className='card-info'>
            <h2>Groceries</h2>
            <p>Buy groceries from the nearest store</p>
          </div>
        </NavLink>
        <NavLink to="beverages" className='card'>
          <img src={beverages} alt="Beverages" className='card-img animate__animated  animate__swing  animate__slower' />
          <div className='card-info'>
            <h2>Beverages</h2>
            <p> Order your favorite beverages from our store</p>
          </div>
        </NavLink>
        <NavLink to="schedule-exercise" className='card'>
          <img src={exercise} alt="Exercise" className='card-img animate__animated  animate__shakeX  animate__slow' />
          <div className='card-info'>
            <h2>Exercise</h2>
            <p>Join a morning or evening road run and jogs</p>
          </div>
        </NavLink>
        <NavLink to="organize-event" className='card'>
          <img src={party} alt="Beverages" className='card-img animate__animated animate__jello  animate__slower' />
          <div className='card-info'>
            <h2>Parties &amp; Chills</h2>
            <p> Organize or join a party &amp; Chill with friends</p>
          </div>
        </NavLink>
      </div>
    </>
  )
}
