import React from 'react'

const Card = (props) => {
  return (
    <>
       <div className='box btn_shadow' >
        <div className='img'>
            <img src={props.image}  alt=''/>
        </div>
        
        <div className='title'>
            <h2>{props.title}</h2>
           
        </div>
     </div>
    </>
  )
}

export default Card
