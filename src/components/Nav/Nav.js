import React from 'react';
import './nav.css';

const Nav = props => (
  <nav>
    <ul>
      <li className="brand">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw">{props.rightWrong}</li>

      <li id="current">Current Score: {props.score}</li>

      <li id="top">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;
