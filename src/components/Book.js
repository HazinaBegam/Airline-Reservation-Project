import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Book() {

    const Navi = useNavigate();
    
    const [price, increase] = useState(0);

    function ticket(){
        var element = document.getElementById('Destination')
        if(element !== null){
            if(element.value==='Choose Your Destination'){
                return 0
            }
            if(element.value==='Qatar'){
                return 40000;
            } if(element.value==='Mombasa'){
                return 35000;
            } if(element.value==='Hawai'){
                return 38000;
            }
        }
        else{
            return 0
        }
    }

    const Next =()=> {
        Navi('/payment')
    }

    function Amount(){
        var cost = (ticket() * document.getElementById('Ticket').value)
        localStorage[1] = cost
        return cost
    }

  return (
    <section className='showcase login'>
        <div className='showcase-overlay'>
          <form onSubmit={Next} className='form-control'>
            <input
              type='text'
              name='Name'
              id='Name'
              placeholder='Name'
              required
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
              required
            />
            <select
              type='texg'
              name='Destination'
              id='Destination'
              onChange={()=>increase(Amount())}
              required
            >
                <option value="Choose Your Destination">Choose Your Destination</option>
                <option value="Qatar">Qatar</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Hawai">Hawai</option>
            </select>
            <input
              type='number'
              name='Ticket'
              id='Ticket'
              min={1}
              max={10}
              placeholder='Select your Tickets'
              onChange={()=>increase(Amount())}
              required
            />
            <button type='submit'>Book Now</button>
            <h1>Total Amount : Rs {price}</h1>
          </form>
        </div>
      </section>
  )
}

export default Book