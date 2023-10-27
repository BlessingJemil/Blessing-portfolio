import React,{useState} from 'react';
import './Header.css';

import logo from "./pic/logo-removebg-preview.png";


const Header = () => {
    //when scroll header at top

    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header")
        header.classList.toggle("active",window.scrollY > 100)
    })

    //toggle menu
    const [Mobile,setMobile] = useState(false)
  return(
    <>
        <header className='header'>
            <div className="container d_flex">
                <div className='f_flex'>
                    <img src={logo} className="logo" alt='logo'  />
                    
                </div>

                <div className="navlink">
                    {/*<ul className="link f_flex uppercase"></ul>*/}
                        <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase "} onClick={() => setMobile(false)}>
                        <li><a href="#home">home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#portfolio">projects</a></li>
                       <li><a href="#education">education</a></li>
                        <li><a href="#contact">contact</a></li>
                        <li></li>
                        
                        
                        
                        
                    </ul>

                    <button className='toggle' onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <i className='fa fa-times close home-btn'></i> : <i className='fa fa-bars open home-btn'></i>}
                    </button>
                </div>
            </div>
        </header>
       {/*<section className='demo'></section>*/}
    
    </>
  );
}

export default Header;