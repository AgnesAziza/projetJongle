import React, { useState } from 'react';

import AuthNav from "../loginLogout/auth-nav"

import { Link } from 'react-router-dom';
import './Navbar.css'

//TODO CRUD tutoriel seulement si je suis connectée 

const Navbar = () => {
  return (
    <div>
      <p>je suis la nav</p>
      <AuthNav />
      <nav>
       
          <ul>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li class="deroulant">
              <Link to="/monCompte">Mon compte</Link>
                <ul class="sous">
                  <li><Link to= ""></Link></li>
                </ul>
            </li>
            <li className="deroulant">
              <Link to="/tutos">Tutoriels</Link>
                <ul class='sous'>
                  <li> <Link to= "/tutos/balles">Balles</Link>></li>
                  <li> <Link to= "/tutos/massues">Massues</Link>></li>
                  <li> <Link to= "/tutos/hoop">Hoop</Link>></li>
                </ul>
            </li>
            <li>
              <Link to="/meeting">Rendez-vous jongleurs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">A propos</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar