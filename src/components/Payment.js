import React from 'react'
import { useNavigate} from 'react-router-dom'

function Payment() {

  const navigate = useNavigate();

  function Success() {
      alert("Payment Success.....")
      navigate('/logged');
  }
  return (
    <>
    <section className="showcase login">
        <div className="showcase-overlay">
            <form onSubmit={Success} className="form-control">
                <input type="text" id="number" placeholder='Card Number (1234-1234-1234)' required/>
                <input type="text" id="date" placeholder='Expiry Year (YYYY-MM)' required/>
                <input type="password" id ='cvv' placeholder='CVV' required />
                <input type="text" id='name' required placeholder='Name on The Card'/>
                <button type='submit'>Pay Rs.{localStorage[1]}</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Payment