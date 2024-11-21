import BagIcon from './img/bag-icon-light.png';
import SearchIcon from './img/search-icon-light.png';
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from 'react';
//NavLink rather than Link allows for activeClassName
import {NavLink} from 'react-router-dom';
const Navbar = () => {  
  //When window is less than 900px, isDesktop is true
  const [isDesktop, setDesktop] = useState(window.innerWidth > 875);
  const [showMin, setShowMin] = useState(false);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 875);
  };

  //Listens to see if window is resized
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const menuClick = () =>{
    setShowMin(state=> !state);
  }

  return(
      <div className="navbar">
          <div id ="nav-links" class="nav-links">

            {isDesktop ?( 
            <div className="maxLinks">
              <span id="logo-title">Smitty's Sweets</span>
              <NavLink to="/" activeClassName="active">Home</NavLink>
              <NavLink to="/about" activeClassName="active">About</NavLink>
              <NavLink to="/shop" activeClassName="active">Shop</NavLink>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </div>): (
              <p id="icon" onClick={menuClick}><FaBars /></p>
            )}

            {!isDesktop && showMin && 
            <div className="minLinks">
              <p><NavLink to="/" activeClassName="active">Home</NavLink></p>
              <p><NavLink to="/about" activeClassName="active">About</NavLink></p>
              <p><NavLink to="/shop" activeClassName="active">Shop</NavLink></p>
              <p><NavLink to="/contact" activeClassName="active">Contact</NavLink></p>
            </div>}

            
          </div>
          <div className="iconLinks">
                <img id="search" className="icon" src={SearchIcon} alt="search icon"  height="35px" width="35px" />
                <img id="bag" className="icon" src={BagIcon} alt="bag icon"  height="35px" width="35px" />
            </div>
      </div>
  );
}

export default Navbar;
