import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/fontawesome-free-solid';
import { } from '@fortawesome/fontawesome-free-brands';
// import './Experience.css';

const Education = props => (
  <section id='education'>
    <h2>Education</h2>
    <p>
      <FontAwesomeIcon icon='graduation-cap' />
      I have a Bachelors of Science from the University of Mary Washington in the field of Business Administration.
    </p>
    <p>
      <FontAwesomeIcon icon='certificate' />
      I am currently enrolled in <a href='https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'>Full Stack Web Developer Nanodegree</a> and <a href='https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'>Professional React Developer Nanodegree</a> programs offered by <a href='https://www.udacity.com'>Udacity</a>.
    </p>
  </section>
)

export default Education;