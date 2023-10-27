import React, { useState } from 'react'

const Card = (props) => {
    const[modal,setmodal]=useState(false);
    const toggleModal =()=>{
        setmodal(!modal);
    }
  return (
    <>
     <div className='box btn_shadow' >
        <div className='img'>
            <img src={props.image}  alt='' onClick={toggleModal}/>
        </div>
        <div className='category d_flex'>
            <span onClick={toggleModal}>{props.category}</span>
            <label>
                
                {props.totalLike}
                
            </label>
        </div>
        <div className='title'>
            <h2 onClick={toggleModal}>{props.title}</h2>
            <a href='#popup' className='arrow' onClick={toggleModal}>
                <i className='fa fa-arrow-right'></i>
            </a>
        </div>
     </div>
    {/*Popup*/}
     {modal &&(
        <div className='modal'>
            <div className='overlay' onClick={toggleModal}></div>
            <div className='modal-content d_flex'>
                <div className='modal-img left'>
                    <img src={props.image} alt='' />
                </div>
                <div className='modal-text right'>
                    <span>Featured - Design</span>
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                    <div className='button f_flex mtop'>
                        <a href={props.glink}>
                             <button className='btn_shadow'>
                                    Github
                            </button>
                        </a>
                        <a href={props.link}>
                            <button className='btn_shadow'>
                                    Live Demo
                            </button>
                        </a>
                    </div>
                    <button className='close-modal btn_shadow' onClick={toggleModal}>
                        <i className='fa fa-times'></i>
                    </button>
                </div>
            </div>
        </div>
     )}
    </>
  )
}

export default Card;
