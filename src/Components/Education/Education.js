import React from 'react'
import Card from '../Education/Card';
import EducationApi from '../Education/EducationApi';
import "../Education/Education.css";

const Education = () => {
  return (
    <>
      <section className='Resume' id='education'>
        <div className='container top'>
            <div className='heading text-center'>
                <h4>Fresher</h4>
                <h1>My Education Journey</h1>
            </div>

            <div className='content-section mtop d_flex'>
                <div className='left'>
                    <div className='heading'>
                        <h4></h4>
                        <h1></h1>
                    </div>
                    <div className='content'>
                        {EducationApi.map((val, id)=>{
                            if(val.category === "education"){
                                return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Education
