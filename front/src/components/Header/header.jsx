import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./header.css";

//TODO pourquoi transformer en comoposant React? 
const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
  return (
    <div className="header">
      <Logo>
        <Link to='/'>
        </Link>
      </Logo>
    </div>
  );
};

export default Header;