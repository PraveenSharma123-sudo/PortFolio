import React from 'react'
import Card from '../Card/Card'
import "./Experience.css"
import lt from "../../assets/L&T.jpg"

const Experience = () => {
  return (
    <div id="experience">
      <h1 id="para">1 year experience as Diploma Enginner Trainee in L&T</h1>
    
    <div div className='leftsection'>
    <div className='text'>
      <h1>Personal Info</h1>
      <ul>
        <li>Demonstrated proficiency in MS Excel for data analysis and reporting.</li>
        <li>Developed understanding of HES to support engineering projects like smartmeter.</li>
      </ul>
    </div>
    
    </div>
    <div className='rightsection'>
       <Card title="Diploma Engineer Trainee" image={lt}/>
    </div>

  
    </div>
  )
}

export default Experience