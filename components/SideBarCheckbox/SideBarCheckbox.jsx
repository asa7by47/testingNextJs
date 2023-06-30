import React from "react";
import style from './SideBarCheckbox.module.css'
const SideBarCheckbox = ({ title, sideBarFontSize , addingMarginNegative}) => {
  return (
    <>
      <li className={`d-flex flex-row m-0 p-0  ${addingMarginNegative}`}>
        <label htmlFor={title}>
          <input type="checkbox" id={title} />
          <span className={`ms-2 ${sideBarFontSize} ${style.color}`}> {title} </span>
        </label>
      </li>
      
    </>
  );
};

export default SideBarCheckbox;
