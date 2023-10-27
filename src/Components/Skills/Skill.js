import React from 'react';
import "./Skill.css";
import Card from '../Skills/Card';
import Skill_data from './Skill_data';

const Skill = () => {
  return (
    <>
     <section className='skill top' id='skills'>
        <div className='container'>
            <div className='heading text-center'>
                <h4>My Best</h4>
                <h1>Skills</h1>
            </div>

            <div className='content grid'>
                {Skill_data.map((value,index)=>{
                    return <Card key={index} title={value.title}  image={value.image} />
                })}
                
            </div>
        </div> 
      </section>
    </>
  );
}

export default Skill;
