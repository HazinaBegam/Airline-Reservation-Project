import React from 'react'
import { useNavigate } from 'react-router-dom'
import image1 from '../assets/image-1.jpg'
import image2 from '../assets/image-2.jpg'
import image3 from '../assets/image-3.jpg'

const Destinations = () => {

  const Navi = useNavigate();

  const Book = () => {
     
    Navi('/book')
  }
  
  return (
    <section className='destinations'>                                                                                                                                                                                                                                                                                
      <h3>Fly around the World With Us</h3>
      <div className='grid'>                                                                                        
        <div>
          <img src={image1} alt='destination-1' />
          <h3>Fly to Qatar</h3>
          {/* <p>
          Qatar is a peninsular Arab country whose terrain comprises arid desert and a long Persian (Arab) Gulf shoreline of beaches and dunes. Also on the coast is the capital, Doha, known for its futuristic skyscrapers and other ultramodern architecture inspired by ancient Islamic design, such as the limestone Museum of Islamic Art. The museum sits on the city’s Corniche waterfront promenade.
          </p>    */}
          <ul>
            <li>Museum of Islamic Art</li>
            <li>Souq Waqif</li>
            <li>The Pearl-Qatar</li>
            <li>Doha Corniche</li>
            <li>Katara Beach</li>
          </ul>
          <br />
          <h3>Rs.40000/-</h3>  
          <h5>3-Days & 2-Nights</h5>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        </div>

        <div>
          <img src={image2} alt='destination-2' />
          <h3>Experience Mombasa</h3>
          {/* <p>
          Mombasa is a coastal city in southeastern Kenya along the Indian Ocean. The town is known as the white and blue city in Kenya. It is the country's oldest and second-largest city.
          </p> */}
          <ul>
            <li>Diani Beach</li>
            <li>Haller Park</li>
            <li>Nguuni Nature Sanctuary</li>
            <li>National Museums of Kenya-Rabai Museum</li>
            <li>Mwaluganje Elephant Sanctuary</li>
          </ul>
          <br />
          <h3>Rs.35000/-</h3>  
          <h5>3-Days & 2-Nights</h5>
        </div>

        <div>
          <img src={image3} alt='destination-3' />
          <h3>Savour Hawaii</h3>
          {/* <p>
          Hawaii is a state in the Western United States, located in the Pacific Ocean about 2,000 miles from the U.S. mainland. It is the only U.S. state outside North America, the only state that is an archipelago, and the only state in the tropics.
          </p> */}
          <ul>
            <li>Hawaii Volcanoes National Park</li>
            <li>Diamond Head</li>
            <li>Hanauma Bay</li>
            <li>Bishop Museum</li>
            <li>Akaka Falls State Park</li>
          </ul>
          <br />
          <h3>Rs.38000/-</h3>  
          <h5>3-Days & 2-Nights</h5>
        </div>
      </div>
      <button className='book' onClick={Book}>Book</button>
    </section>
  )
}

export default Destinations
