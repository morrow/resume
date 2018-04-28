import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/fontawesome-free-solid';
import { } from '@fortawesome/fontawesome-free-brands';
import './Introduction.css';

const Introduction = props => (
  <section id='introduction'>
    <h2>Introduction</h2>
    <p>
      <FontAwesomeIcon icon='user' />
      I'm Terrence Morrow, I am a full-stack web developer located in Norfolk, VA. I have experience developing dynamic web applications using Ruby on Rails and HTML + CSS + JavaScript, including HTML5 Canvas, and ES6 powered applications. I have worked with clients to upgrade their existing flash applications to html5, performed pixel-perfect PSD to HTML conversions, as well as creating originally designed client applications from client input.
    </p>
  </section>
)

export default Introduction;