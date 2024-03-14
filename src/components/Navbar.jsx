import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiLogin } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";



const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Humanli</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Humanli</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Login">Login <CiLogin /></NavLink>
            <NavLink className="nav-link" to="/Signup">Signup<SiGnuprivacyguard /></NavLink>
          </li>
        
        </ul>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
