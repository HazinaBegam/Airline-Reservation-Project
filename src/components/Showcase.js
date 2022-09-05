import React from 'react'
import Logo from '../assets/Logo.png'

const Showcase = () => {
  return (
    <section className='showcase'>
      <div className='showcase-overlay'>
        <img src={Logo} alt="logo" />
        <h1>Fly With Us</h1>
        <p>
          Get to tour the world in style. Select a destination, book your
          flight, and off you go!
        </p>
      </div>
    </section>
  )
}

export default Showcase
