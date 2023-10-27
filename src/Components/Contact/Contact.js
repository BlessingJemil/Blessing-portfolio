import React, { useState } from 'react';
import '../Contact/Contact.css';
import contact1 from '../Skills/pic/partnership-handshake-innovation-corporate-business-concept.jpg';
const Contact = () => {
    const[data,setdata]=useState({
        fullname:"",
        phone:"",
        email:"",
        subject:"",
        message:""
});
 const InputEvent = (event) => {
    const{name,value} = event.target
    setdata((preVal) => {
        return {
            ...preVal,
            [name]:value,
        }
    })
 }

 const formSubmit = (event) =>{
    event.preventDefault()
    alert(
        `My Name is ${data.fullname},
        My Phone Number is ${data.phone},
        My Email is ${data.email},
        Subject ${data.subject},
        Message is ${data.message}   `
    )
 }
 const clear =()=>{
    setdata('');
     }
  return (
    <>
        <section className='Contact' id='contact'>
            <div className='container top'>
                <div className='heading text-center'>
                    <h4>CONTACT</h4>
                    <h1>Connect With Me</h1>
                </div>
                <div className='content d_flex'>
                    <br></br>
                    <div className='left'>
                        <div className='box box_shadow'>
                            <div className='img'>
                                <br></br>
                                <img src={contact1} alt=''  />
                            </div>
                            <div className='details'>
                                <h1>Blessing Jemil P J</h1>
                                <p>I'm available for freelance work. Connect with me via and call in to my account.</p>
                                <br></br>
                                <p>Phone: +917871439658</p>
                                <p>Email: blessingjemil@gmail.com</p>
                                <br></br>
                                <span>FIND ME IN</span>
                                <div className='button f_flex'>
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

                    <div className='right box_shadow'>
                        <form onSubmit={formSubmit}>
                            <div className='fl_flex'>
                                <div className='input row'>
                                    <span>Your Name</span>
                                    <input type='text' placeholder='Full Name' name='fullname' value={data.fullname} onChange={InputEvent}></input>
                                </div>
                                <div className='input row'>
                                    <span>Contact Number</span>
                                    <input type='phone' placeholder='Number' name='phone' value={data.phone} onChange={InputEvent}></input>
                                </div>
                            </div>
                                <div className='input'>
                                    <span>Email ID</span>
                                    <input type='email' placeholder='Email Id' name='email' value={data.email} onChange={InputEvent}></input>
                                </div>
                                <div className='input'>
                                    <span>Subject</span>
                                    <input type='text' placeholder='Subject' name='subject' value={data.subject} onChange={InputEvent}></input>
                                </div>
                                <div className='input'>
                                    <span>Message</span>
                                    <textarea cols='30' rows='10' placeholder='Enter Message' name='message' value={data.message} onChange={InputEvent}></textarea>
                                </div>
                                <button className='btn_shadow' onClick={clear}>
                                    SEND <i className='fa fa-long-arrow-down'></i>
                                </button>   
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact;