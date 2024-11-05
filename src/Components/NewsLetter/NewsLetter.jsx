import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSSIVE OFFER ON YOUR EMAIL</h1>
        <p>sbscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='your email' />
            <button>subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter