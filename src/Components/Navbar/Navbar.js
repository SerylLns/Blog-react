import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    }
  }, [])

  return (
    <nav>
      {(toggleMenu || screenWidth > 500)  &&
        <ul className="liste">
        <NavLink activeClassName='active-nav' exact to="/">
          <li className="items">Accueil</li>
        </NavLink>
        <NavLink activeClassName='active-nav' exact to="/new"> 
          <li className="items">écrire</li>
        </NavLink>
        <NavLink activeClassName='active-nav' exact to='/contact'>
          <li className="items">Contact</li>
        </NavLink>
        </ul>
      }
      <button className="btn" onClick={toggleNav}>BTN</button>
    </nav>
  );
};

export default Navbar;