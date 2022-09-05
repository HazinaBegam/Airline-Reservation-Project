import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Header1 from './components/Header1'
import Showcase from './components/Showcase'
import Showcase1 from './components/Showcase1'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Login from './components/Login.js'
import SignUp from './components/SignUp'
import Error from './components/Error'
import Payment from './components/Payment'
import Gallery from './components/Gallery'
import Book from './components/Book'
import SliderData from './components/SliderData'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<><Header /><Showcase1/></>}/>
        <Route path = '/logged' element={<><Header1/><Showcase/><Destinations/></>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/book' element={<><Header1 /><Book/></>}/>
        <Route path='/gallery' element={<><Header1/><Gallery slides={SliderData}/></>}/>
        <Route path='/payment' element ={<><Header1/><Payment /></>}/>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
