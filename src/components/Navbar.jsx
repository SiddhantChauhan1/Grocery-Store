import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='nav-heading'>
        <h1>Grocery Store</h1>
        </div>
        <div className='nav-links'>
            <li>Home</li>
            <li>Cart</li>
            <li>Orders</li>
            <li>Log in</li>
        </div>
    </div>
  )
}

export default Navbar