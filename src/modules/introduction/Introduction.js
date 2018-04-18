import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Introduction.css';

const Introduction = props => (
  <article className="Introduction">
    <h1>About Me</h1>
    <p>Hello! I'm Terry Morrow. I'm a full-stack web developer, in the process of relocating to Charleston, SC from Norfolk, VA.</p>
    <section id='languages-frameworks-technologies'>
      <FontAwesome size='2x' name='graduation-cap' /> I have 5 years experience developing dynamic web applications using the following
      <h3>Languages: </h3>
      <ul id='languages' className='code'>
        <li>HTML</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>CoffeeScript</li>
        <li>ES6</li>
        <li>Ruby</li>
        <li>Python</li>
        <li>Python3</li>
        <li>PHP</li>
      </ul>
      <h3>Frameworks: </h3>
      <ul id='frameworks'>
        <li>Ruby on Rails</li>
        <li>React/Redux</li>
        <li>Wordpress</li>
      </ul>
      <h3>Technologies: </h3>
      <ul id='technologies'>
        <li>Git</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>OAuth2.0</li>
        <li>HTML5 Canvas</li>
        <li>Nginx</li>
        <li>AWS</li>
      </ul>
    <section>A Bachelors of Science from the University of Mary Washington in the field of Business Administration</section>
    <section>Worked with multiple clients developing web applications, including:
      <ul>
        <li> existing flash applications to html5</li>
        <li> performing pixel-perfect PSD to HTML conversions</li>
        <li> creating originally designed client applications from client input.</li>
      </ul>
    </section>
  </section>
</article>
)

export default Introduction;