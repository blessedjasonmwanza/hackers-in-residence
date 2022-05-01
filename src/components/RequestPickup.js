import React, { useState } from 'react'
import Swal from 'sweetalert2';
import PersonalDetailsFields from './utils/PersonalDetailsFields';

export default function RequestPickup() {
  const [locations, setLocations] = useState([
    'Nkwashi Dam',
    'Nkwashi Offices',
    'Nkwashi Market',
    'Nkwashi Hospital',
    'Nkwashi Stadium',
    'Nkwashi Main Houses',
    'Nkwashi Prefabs',
    'Nkwashi 5 Acre Area',
    'Manda Hill',
    'East Packers',
  ]);
  const [requestData, setRequestData] = useState({
    pickup_location: '',
    destination: '',
    date:'',
    time: '',
    comments: '',
  });
  const requestPickup = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Confirm Pickup Request',
      icon: 'question',
      text: 'Are you sure you want to request a pick up?',
      footer: `
      <center>
        <small>
          Please note that pickup requests are processed on a first come first serve basis and may take up to 24 hours to be processed
        </small>
      </center>
      `,
      showCancelButton: true,
      confirmButtonColor: 'var(--theme-color)',
      confirmButtonText: 'Yes, request pickup!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,

  }).then((res) => {
      if (res.isConfirmed) {
          Swal.fire({
              title: 'Booking Placed!',
              text: 'Your request has been filed successfully! You will be contacted shortly',
              footer: '<center><small>A driver will contact you shortly</small></center>',              
              icon: 'success',
              confirmButtonColor: 'var(--theme-color)',
          }).then(() => {
              const locationOptions = document.querySelectorAll('select').forEach(el => el.selectedIndex = 0);
              document.querySelector('.comments').value = '';
              document.querySelector('.date').value = '';
              document.querySelector('.time').value = '';
          });
      }
  })
  }
  return (
    <section className='beverages animate__animated animate__fadeIn'>
      <h2 className='page-title'>Request a Pickup</h2>
      <form onSubmit={(e) => requestPickup(e)}>
        <PersonalDetailsFields />
        <label>
          Pickup Location:
          <select required onChange={(e) => {setRequestData({...requestData, pickup_location: e.target.value})}}>
            <option value="" defaultValue>Select a location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </label>
        <label>
          Destination Location:
          <select required onChange={(e) => {setRequestData({...requestData, destination: e.target.value})}}>
            <option value="" defaultValue>Select a location</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>{location}</option>
            ))}
          </select>
        </label>
        <label>
          Date:
          <input type="text" className="date" required 
          placeholder="Select a date"
          onFocus={(e) => e.target.type = 'date'}
          onBlur={(e) => e.target.type = 'text'}
          onChange={(e) => setRequestData({...requestData, date: e.target.value})}
          />
        </label>
        <label>
          Time:
          <input type="text" className="time" required 
          placeholder="Choose a time"
          onFocus={(e) => e.target.type = 'time'}
          onBlur={(e) => e.target.type = 'text'}
          onChange={(e) => setRequestData({...requestData, time: e.target.value})}
          />
        </label>
        <label>
          Comments (optional):
          <textarea className='comments' value={requestData.comments} onInput={(e) => setRequestData({...requestData, comments: e.target.value})} placeholder='Type your comments here..'></textarea>
        </label>
        <center>
          <button type="submit" className='btn'>Request now</button>
        </center>
      </form>
    </section>
  )
}
