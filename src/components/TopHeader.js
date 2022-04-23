import React from 'react'
import logo from '../assets/img/nkwashi-logo.png';

export default function TopHeader() {
  return (
    <header className='top-header'>
        <img src={logo} alt="Nkwashi Logo" className='brand-logo' />
    </header>
  )
}
