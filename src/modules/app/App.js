import React, { Component } from 'react';
import Introduction from '../introduction/Introduction'
import Experience from '../experience/Experience'
import Education from '../education/Education'
import Contact from '../contact/Contact'
import './App.css';

class App extends Component {
  render = ()=> (
    <div className="App">
      <Introduction />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

export default App;