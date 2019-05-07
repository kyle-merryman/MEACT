import React, {Component} from 'react';
//components imported
import Nav from './components/Nav';
import Header from './components/Header';
//stylesheets
import 'normalize.css/normalize.css';
import './App.css';
import './slider-animations.css';

class App extends Component {
  render() {
    return(
    <div>
      <Header></Header>
      <Nav></Nav>
    </div>
  );
  }
}

export default App;
