import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Login = () => {

  const navi = useNavigate();

  function logged(){
    alert("Logged In Successfully");
    navi('/logged')
  }

  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form onSubmit={logged} className='form-control'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
              required
            />
            <input type='password' name='password' id='password' placeholder='Your Password' required/>
            <button type='submit'>Log In</button>
            <Link className='links' to='/signup'>
            Don't Have an Account.?
          </Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default Login
