import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="logo">
          <Link to={'/'}>
            TrueBlog
          </Link>
      </div>
      <span>Made by <b>KUSHAGRA</b>.</span>
    </footer>
  )
}

export default Footer


