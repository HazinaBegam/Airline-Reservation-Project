import React from 'react'
import Logo from '../assets/Logo.png'

const Showcase1 = () => {
  return (
    <section className='showcase'>
      <div className='showcase-overlay'>
        <img src={Logo} alt="logo" />
        <h1>Fly With Us</h1>
        <p>
          Get to tour the world in style. Select a destination, book your
          flight, and off you go!
        </p>
        <p>Please Login to Book Your Tickets......!</p>

      </div>
    </section>
  )
}

export default Showcase1