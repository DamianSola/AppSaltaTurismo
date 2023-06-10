import React, { useState, useEffect } from 'react';
import "./BurgerStyled.css";


const BurgerButton = ({handleClick,isOpen}) => {

  return (
    <button className={`hamburguesa-button ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
};

export default BurgerButton;
