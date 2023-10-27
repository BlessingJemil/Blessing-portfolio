import React from 'react';
import "./Home.css";
import hero from "./pic/Blessing-removebg-preview.png";
import skill1 from "./pic/logo192.png";
import skill2 from "./pic/pngwing.com (3).png";
import skill3 from "./pic/pngwing.com (2).png";
import { Typewriter,useTypewriter,Cursor } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
     <section className='hero' id='home'>
        <div className='container f_flex top'>
            <div className='left top'>
                <h3>WELCOME TO MY WORLD</h3>
                <h1>
                    Hi, I'm <span> Blessing Jemil</span>
                </h1>
                <h2>
                    a <span> <Typewriter words={[' MERN Stack Developer ',' Coder. ', ' Web Developer ',' React Developer ',' Node.js Developer ',' Express.js Developer ',' Mongo DB ']}
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                 delaySpeed={1000}
           
                            />
                        </span>
                </h2>
                <p>I'm a MERN Stack developer builds and maintains user interfaces and front-facing components using React.js, which is a front end library and framework. </p>
                <div className='mob'>
                  <div className='right'>
                    <div className='right_img'>
                        <img src={hero} alt='me'></img>
                    </div>
                 </div>
                </div>
                <div className='hero_btn d_flex'>
                    <div className='col_1'>
                        <h4>FIND ME IN</h4>
                        <div className='button'>
                            <a href='https://github.com/BlessingJemil'>
                            <button className='btn_shadow'>
                                <i className="fa fa-github" aria-hidden="true"></i>
                            </button>
                            </a>
                             <a href='https://www.linkedin.com/in/blessing-jemil-p-j-ba0218203/'>
                            <button className='btn_shadow'>
                               
                                 <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </button>
                            </a>
                            <a href='https://www.instagram.com/mr.genious_generous_/'>
                            <button className='btn_shadow'>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </button>
                            </a>
                        </div>

                    </div>
                   
                </div>
            </div>
                <div className='right'>
                    <div className='right_img'>
                        <img src={hero} alt='me'></img>
                    </div>
                </div>
        </div>
     </section>
    </>
  )
}

export default Home
