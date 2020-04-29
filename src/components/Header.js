import React, {Component} from 'react';


const Header = () => {
  return (
  <header style={headerStyle}>
    <h3>
      <a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">
      Click here for a random Wikipedia article</a>
    </h3>
   </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}


export default Header;