import React from 'react'
import videoBG from '../Images/course-video.mp4'
import '../Styles/Home.css'




function Home() {
  return (
    <div className='home'>
      <div className="overlay"></div>
      <video src={videoBG} autoPlay loop muted />
      <div className='content'>
        <h1>WELCOME</h1>
      </div>
    </div>
  )
}

export default Home