import React from 'react'
import '../Styles/Home.css'
import videoBG from '../Images/course-video.mp4'



function Home() {
  return (
    <div className='home'>
      <div className='content'>
        <h1>Home</h1>
        <div className="overlay"></div>
        <video src={videoBG} autoPlay loop muted />
      </div>
    </div>
  )
}

export default Home