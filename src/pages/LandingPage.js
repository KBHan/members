import React from 'react';
import cwbnLandingPic from '../images/cwbn-landing-model-pic.png';
import logoTitle from '../images/logo-title-pic.png';
import './LandingPage.css';

const LandingPage = () => (
  <div>
    <h1>Sample Landing Page Image </h1>
    <p>Please sign up or log in</p>
    <img
      className="LandingPage-members-pic"
      src={cwbnLandingPic}
      alt="Some of the members of Code for Denver"
    />

    <div className="MenuBar">
      <ul>
        <li>
          <img className="LogoTitle" src={logoTitle} alt="CWBN logo" />
        </li>

        <li>HOME</li>
        <li>ABOUT</li>
        <li>SERVICES</li>
        <li>OUR TEAM</li>
        <li>HOW IT WORKS</li>
        <li>PEOPLE SAY</li>
        <li>CONTACT</li>
      </ul>
    </div>

    <div className="SearchBar">
      <p className="Slogan"> Let's Build A Stronger Local Economy '</p>
      <p> Some introductory details here </p>
      <p> I need [[[this service ]]] in [[[this city]]] Search Button </p>
    </div>
  </div>
);

export default LandingPage;
