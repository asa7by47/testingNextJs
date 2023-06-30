import React from 'react';
import style from "../Navbar/navbar.module.css";

const NavbarIcon = ({icon}) => {
    return (
        <li className={`nav-item bg-icon rounded-circle me-1 ${ style.fontSize } ${style.bgIcon} d-flex justify-content-center align-items-center`} >
        <a className={`nav-link ${style.navIcons} d-flex justify-content-center align-items-center text-center `} href="#">
          {icon}
        </a>
      </li>
     
    );
};

export default NavbarIcon;