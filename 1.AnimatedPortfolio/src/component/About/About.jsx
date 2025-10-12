import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from "../../assets/mern.png"
import dsa from "../../assets/dsa.png"
import java from "../../assets/java.png"
import python from "../../assets/Python.jpeg"
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:2,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 50%",
        end:"top 20%"
  
      }
    } )
    gsap.from(".line",{
      x:-100,
      duration:2,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        start:"top 50%",
        end:"top 20%"
  
      }
    } )
    gsap.from(".aboutdetails h1",{
      x:-100,
      duration:2,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
        start:"top 50%",
        end:"top 20%"
  
      }
    } )
    gsap.from(".aboutdetails ul",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2,
        start:"top 50%",
        end:"top 20%"
  
      }
    } )
    gsap.from(".rightabout",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
  
      }
    } )
  })
  return (
    <div id ="about">

    <div className='leftabout'>
    <div className='circle-line'>
      <div className='circle'></div>
      <div className='line'></div>
      <div className='circle'></div>
      <div className='line'></div>
      <div className='circle'></div>
    </div>

    <div className='aboutdetails'>
      <div className='personalinfo'>
        <h1>Personal Info</h1>
        <ul>
          <li>
            <span>NAME</span>:PRAVEEN SHARMA
          </li>
          <li>
            <span>GENDER</span>:MALE
          </li>
          <li>
            <span>LANGUAGE</span>:HINDI , ENGLISH
          </li>
          <li>
            <span>CONTACT</span>:pkpravensh@gmail.com
          </li>
        </ul>
      </div>
      <div className='education'>
        <h1>Education</h1>
        <ul>
          <li>
            <span>DEGREE</span>: BTECH
          </li>
          <li>
            <span>BRANCH</span>: INFORMATION TECHNOLOGY
          </li>
          <li>
            <span>COLLEGE</span>: RAJKIYA ENGINEERING COLLEGE
          </li>
          <li>
            <span>DIPLOMA</span>: ELECTRONICS ENGINEERING
          </li>
           <li>
            <span>COLLEGE</span>: INSTITUTE OF ENGINEERING AND RURAL TECHNOLOGY
          </li>
        </ul>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ul>
          <li>
            MERN STACK DEVELOPER
          </li>
          <li>
            DSA
          </li>
          <li>
            JAVA
          </li>
          <li>
            PYTHON
          </li>
        </ul>
      </div>
    </div>


    </div>
    <div className='rightabout'>
   <Card title="MERN STACK DEVELOPER" image={mern}/>
   <Card title="JAVA" image={java}/>
   <Card title="DSA" image={dsa}/>
   <Card title="PYTHON" image={python}/>
    </div>


    </div>
  )
}

export default About