import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg--500">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">MAKIX LTD</a>
  </div>
  <div className="flex-none text-white text-xl">
    <ul className="menu menu-horizontal px-1 ">
      <li><a>Home</a></li>
      <li><a>Services</a></li>
      <li><a>About Us</a></li>
      <li><a>Contact Us</a></li>
      <li><a>Sign Up</a></li>
      <li><a>Sign in</a></li>
    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar