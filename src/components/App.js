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

  // clickFoDeetz = (event) => {
  //   if (event.target.className === "hog-image"){
  //       }
  // }

  // showDeetz = (event) => {
  //   const deetz =
  //   if
  // }

  render() {
    return (
      <div className="App">
          < Nav />
        <HogContainer myHogs={hogs} findHogImg={this.findHogImg} clickFoDeetz={this.clickFoDeetz}/>

      </div>
    )
  }
}

export default App;
