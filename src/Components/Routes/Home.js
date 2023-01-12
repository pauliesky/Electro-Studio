import React from 'react'
import '../Styles/Home.css'
import videoBG from '../Images/course-video.mp4'



function Home() {
  return (
    <>
      <div className='home'>
        <video className='bg-video' src={videoBG} autoPlay loop muted />
        <div className="overlay"></div>
        <div className='content'>
          <h2>HELLO EVERYONE</h2>
          <h1>WELCOME TO ELECTRA LAB STUDIO</h1>
          <p>This is a web application that is integrated with Cloud computing and Artificial Intelligence that will enable users mamage leak detection and control, Liquid loading prediction mature fields, Sand production prediction and control, and Eleaktra Taxpayer Carbon Credits</p>
          <button className='home-btn'>JOIN US NOW</button>
        </div>
        <div>
          <p>Lorem agba roger nobby
          </p>
        </div>
      </div>
    </>
  )
}

export default Home