import React, { useState } from 'react'
import Swal from 'sweetalert2';
import PersonalDetailsFields from './utils/PersonalDetailsFields'

export default function BookCanoe() {
  const [comments, setComments] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const bookCanoe = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Confirm Booking',
      icon: 'question',
      text: 'Are you sure you want to book this session?',
      showCancelButton: true,
      confirmButtonColor: 'var(--theme-color)',
      confirmButtonText: 'Yes, place order!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true,

  }).then((res) => {
      if (res.isConfirmed) {
          Swal.fire({
              title: 'Order Placed!',
              text: 'Your order has been placed successfully! You will be contacted shortly',
              icon: 'success',
              confirmButtonColor: 'var(--theme-color)',
          }).then(() => {
              document.querySelector('.comments').value = '';
              document.querySelector('.date').value = '';
              document.querySelector('.time').value = '';
          });
      }
  })
  }
  return (
    <section className='beverages animate__animated animate__fadeIn'>
      <h2 className='page-title'>Book a canoe & Sail at Nkwashi Dam</h2>
      <form onSubmit={(e) => bookCanoe(e)}>
        <PersonalDetailsFields />
        <label>
          Date:
          <input type="text" className="date" required 
          placeholder="Select a date"
          onFocus={(e) => e.target.type = 'date'}
          onBlur={(e) => e.target.type = 'text'}
          onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          Time:
          <input type="text" className="time" required 
          placeholder="Choose a time"
          onFocus={(e) => e.target.type = 'time'}
          onBlur={(e) => e.target.type = 'text'}
          onChange={(e) => setTime(e.target.value)}
          />
        </label>
        <label>
          Comments (optional):
          <textarea className='comments' value={comments} onInput={(e) => setComments(e.target.value)} placeholder='Type your comments here..'></textarea>
        </label>
        <label style={{flexFlow:'row wrap',justifyContent:'space-around'}}>
              <span>Fees</span>
              <b>ZMW 200.00</b> <b>Per person</b>
          </label>
        <center>
          <button type="submit" className='btn'>Book now</button>
        </center>
      </form>
    </section>
  )
}
