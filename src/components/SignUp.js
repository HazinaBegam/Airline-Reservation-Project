import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const SignUp = () => {

  const navi = useNavigate();

  function logged(){
    alert("Account Created Successfully..\nPlease Login to Continue..");
      navi('/login')
  }

  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form onSubmit={logged} className='form-control'>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              required
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your email address'
              required
            />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Choose your password'
              required
            />
            <input
              type='password'
              name='password2'
              id='password2'
              placeholder='Confirm your password'
              required
            />
            <button type='submit'>Create Your Account</button>
            <Link className='links' to='/login'>
            Already Have an Account.?
          </Link>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp
