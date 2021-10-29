import React , {useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const  [show , setShow] = useState(false)
    return (
        <>
        <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <a class="navbar-brand" href="#">LearnReact</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
    onClick = {()  => setShow(!show)}> 
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : " "}`} >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/service">SERVICE</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/about">ABOUT US</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
        </li>
        
        
        
        
      </ul>
      <form class="d-flex">
        
        <button class="btn btn-outline-success btn-style" type="submit">Signup</button>
        <button class="btn btn-outline-success btn-style border-style-border" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
</section>
            
        </>
    )
}

export default Navbar
