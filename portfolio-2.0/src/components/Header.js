import React from 'react';

function Header() {
  return (
    <nav className="App-link">
      <ul>
        <li id='homeLink'>
          <a href='/portfolio-2.0/src/App.js'>Home</a>
        </li>
        <li id='contactLink'>
          <a href='/portfolio-2.0/src/components/Contact.js'>Contact</a>
        </li>
        <li id='aboutLink'>About</li>
        <li id='portfolioLink'>Portfolio</li>
      </ul>
    </nav>
  );
}

export default Header;
