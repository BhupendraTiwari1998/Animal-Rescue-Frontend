import React from 'react'
import Hero from './Hero'
import PetsProfile from './PetsProfile'
import Donate from './Donate'
import News from './News'

const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <PetsProfile/>
        <Donate/>
        <News/>
    </div>
  )
}

export default Home