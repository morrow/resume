import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/fontawesome-free-solid';
import { } from '@fortawesome/fontawesome-free-brands';
import './Contact.css';

const Contact = props => (
  <section id='contact'>
    <h2>Contact</h2>
    <div><FontAwesomeIcon icon='phone' /> <a href='tel:571-969-1822'>571-969-1822</a></div>
    <div><FontAwesomeIcon icon='envelope' /> <a href='mailto:terrymorrow@gmail.com'>terrymorrow@gmail.com</a></div>
    <div><FontAwesomeIcon icon='laptop' /> <a href='https://terrencemorrow.com/contact'>terrencemorrow.com</a></div>
  </section>
)

export default Contact;