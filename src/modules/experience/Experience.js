import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/fontawesome-free-solid';
import { } from '@fortawesome/fontawesome-free-brands';
import './Experience.css';

const Experience = props => (
  <section id='experience'>
    <h2>Experience</h2>
    <FontAwesomeIcon icon='briefcase' />
    I have 5 years experience developing dynamic web applications for multiple clients using the following
    languages, technologies, and frameworks:
    <div>
      <h3>Languages: </h3>
      <ul id='languages' className='code'>
        <li><a href='https://terrencemorrow.com/services/html-css-javascript-development'>HTML5</a></li>
        <li><a href='https://terrencemorrow.com/services/html-css-javascript-development'>CSS3</a></li>
        <li><a href='https://terrencemorrow.com/services/html-css-javascript-development'>JavaScript</a></li>
        <li><a href='https://terrencemorrow.com/services/html-css-javascript-development'>ES6</a></li>
        <li><a href='https://terrencemorrow.com/services/ruby-on-rails-development'>Ruby</a></li>
        <li><a href='https://terrencemorrow.com/services/back-end-development'>Python3</a></li>
        <li><a href='https://terrencemorrow.com/services/full-stack-web-development'>SQL</a></li>
      </ul>
    </div>
    <div>
      <h3>Technologies:</h3>
      <ul id='technologies' className='code'>
        <li><a href='https://github.com/morrow'>Git</a></li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>Nginx</li>
        <li>AWS</li>
      </ul>
    </div>
    <div>
      <h3>Frameworks:</h3>
      <ul id='frameworks' className='code'>
        <li>Ruby on Rails</li>
        <li>React + Redux</li>
        <li>WordPress</li>
      </ul>
    </div>
    <div>
      <h3>Highlighted Client Project: </h3>
      <p>
        <a href='http://www.edecals.com'>eDecals.com</a> -
        Implementing mobile compatibility for the website eDecals.com. Working directly with the owner, and using a combination of HTML, SCSS, ES6, JavaScript, and Redux patterned state management, I created mobile-friendly HTML5 versions of their existing flash product offerings that now support thousands of customers across multiple platforms and devices.
      </p>
    </div>
    <div class='selected-projects'>
      <h3>Select Github Projects: </h3>
      <ul id='projects'>
        <li>
          <FontAwesomeIcon icon={['fab', 'github']} />
          <a href='https://github.com/morrow/readable/'>readable</a>
        </li>
        <li>
          <FontAwesomeIcon icon={['fab', 'github']} />
          <a href='https://github.com/morrow/my-reads'>my-reads</a>
        </li>
        <li>
          <FontAwesomeIcon icon={['fab', 'github']} />
          <a href='https://github.com/morrow/event-planner'>event-planner</a>
        </li>
      </ul>
    </div>
    <div class='portfolios'>
      <h3>Portfolios: </h3>
      <a href='https://github.com/morrow?tab=repositories' target='_blank'>
        <FontAwesomeIcon icon={['fab', 'github']} />
        Github
      </a>
      <a href='https://angel.co/terrence-morrow' target='_blank'>
        <FontAwesomeIcon icon={['fab', 'angellist']} />
        Angel.co
      </a>
      <a href='https://www.linkedin.com/in/tmorrow86/' target='_blank'>
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
        Linkedin
      </a>
    </div>
  </section>
)

export default Experience;
