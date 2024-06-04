import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="hero min-h-screen  ">
  <div className="hero-content text-white flex-col gap-40 lg:flex-row">
    <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg   shadow-2xl"  />
    <div>
      <h1 className="text-5xl text-white font-bold">Discover Beutiful Wonders</h1>
      <p className="py-6">Tourism is the activity of traveling to and exploring different places for leisure, adventure, cultural experiences, or business purposes. It encompasses a wide range of activities, including sightseeing, visiting historical sites, experiencing local cultures and cuisines, enjoying natural landscapes, and participating in recreational activities. Tourism contributes significantly to the global economy by creating jobs, fostering international connections, and promoting cultural exchange. It also encourages the preservation of natural and cultural heritage sites. With the rise of sustainable tourism, there's a growing focus on minimizing the environmental impact and supporting local communities.</p>
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>

    </div>
  )
}

export default Hero