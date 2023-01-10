import React from 'react'
import '../Styles/Home.css'
import videoBG from '../Images/course-video.mp4'



function Home() {
  return (
    <div className='home'>
      <div className='content'>
        <div className="overlay"></div>
        <video className='bg-video' src={videoBG} autoPlay loop muted />
        {/* <h1>Home</h1> */}
      </div>
    </div>
  )
}

export default Home