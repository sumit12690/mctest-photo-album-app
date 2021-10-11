import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({}) => {
  return (
    <header class="header">
      <Link to="/">
        <div className="logo">Photo Album App</div>
      </Link>
    </header>
  );
};

export default Header;
