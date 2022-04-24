import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import logo from '../assets/img/nkwashi-logo.png';
import backIcon from '../assets/img/back-icon.png';

export default function TopHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const btnSample = <span style={{display:'block', width:'48px'}} />;
  const [backBtn, setBackBtn] = useState(<span />)
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top of page
    if(location.pathname !== '/'){
      setBackBtn(<img src={backIcon} alt="Back" className="back-icon animate__animated animate__fadeIn" onClick={() => navigate('/')} />)
    }else{
      setBackBtn(btnSample)
    }
  }, [location]);

  return (
    <header className='top-header'>
        {backBtn}
        <img src={logo} alt="Nkwashi Logo" className='brand-logo' />
        {btnSample}
    </header>
  )
}
