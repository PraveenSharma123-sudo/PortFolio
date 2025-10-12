import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { Typewriter } from "react-simple-typewriter";
import {useGSAP} from "@gsap/react"
import gsap from 'gsap'
import { use } from 'react';

const Home = () => {

  useGSAP(()=>{
    let tl1=gsap.timeline();
    tl1.from(".line1",{
      y:80,
      duration:1,
      opacity:0
    })
      tl1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
    })
      tl1.from(".line3",{
      y:80,
      duration:1,
      opacity:0
    })
    gsap.from(".righthome img",{
      x:200,
      duration:1,
      opacity:0
    })
  })

  return (
    <div id="home">

    <div className='lefthome'>
    <div className='homedetails'> 
    <div className='line1'>I'M</div>
    <div className='line2'>PRAVEEN SHARMA</div>
    <div className='line3'>
    <Typewriter
          words={["WEB DEVELOPER", "MERN", "FULL STACK"]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={180}
          deleteSpeed={50}
          delaySpeed={1000}
        />

    </div>

    <button><a href="https://docs.google.com/forms/d/e/1FAIpQLSfMeX41oNvbc3KdXPcl4T8swy38FSWcDkXLXTwgYM7LLdDBnw/viewform?usp=header" >
  HIRE ME
</a>
</button>
    <br></br>
    <button><a href="https://drive.google.com/file/d/1i9GVMoBBK_glkV_giSmgk8Nv9JP3vQww/view?usp=drivesdk">RESUME</a></button>
    
    </div>

    </div>

    <div className='righthome'>

    <img src ={man} about='alt="' />

    </div>

    </div>
  )
}

export default Home