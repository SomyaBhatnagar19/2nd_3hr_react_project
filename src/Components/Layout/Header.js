import React from 'react';
import CandyImage from './Candy.png';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <h1>Candy Store</h1>
        <div>
          <HeaderCartButton />
        </div>
      </header>

      <div className={classes.image}>
        <img src={CandyImage} alt="Candy" />
      </div>
    </div>
  );
};

export default Header;
