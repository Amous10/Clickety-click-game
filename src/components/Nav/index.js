import React from 'react';
import './nav.css';

const Nav = props => (
  <nav>
    <div className="brand">
      <a href="/clicky-game/">{props.title}</a>
    </div>

    <p id="rw">{props.rightWrong}</p>

    <p id="curent">Current Score: {props.score}</p>

    <p id="top">Top Score: {props.topScore}</p>
  </nav>
);

export default Nav;
