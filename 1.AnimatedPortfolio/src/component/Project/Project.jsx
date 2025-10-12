import React from 'react'
import "./Project.css"
import Card from '../Card/Card'
import va from "../../assets/va.png"
import AC from "../../assets/Automated.jpeg"
import AI from "../../assets/Blog.jpeg"
import SS from "../../assets/Spam Sms.jpeg"
import CC from "../../assets/CreditCard.png"

import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


const Project = () => {

  useGSAP(()=>{
    gsap.from("#para",{
      y:100,
      duration:2,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
  
      }
    } )
    gsap.from(".slider",{
      x:100,
      duration:2,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
  
      }
    } )
    })
  return (
    <div id="project">
    <h1 id ="para">PROJECT </h1>
    <div className='slider'>
      <Card title={"Virtual Assistant"} image={va}/>
       <Card title={" Automated Attendence System"} image={AC}/>
        <Card title={"AI Powered Blog App using MERN"} image={AI}/>
        <Card title={"SPAM-SMS-DETECTION"} image={SS}/>
        <Card title ={"Credit Card Fraud Detection"} image={CC}/>
    </div>

    </div>
  )
}

export default Project