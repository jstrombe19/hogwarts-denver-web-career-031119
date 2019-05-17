import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import HogCard from './HogCard';

class App extends Component {

  findHogImg = (hog) => {
    let hogKey = hog.toLowerCase().split(' ').join('_') + '.jpg';
    let hogPic = require(`../hog-imgs/${hogKey}`)
    return hogPic;
  }

  render() {
    return (
      <div className="App">
          < Nav />
      <HogContainer myHogs={hogs} findHogImg={this.findHogImg} />

      </div>
    )
  }
}

export default App;
