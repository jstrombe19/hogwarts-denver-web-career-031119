import React from 'react'
import HiddenFields from './HiddenFields'

function additionalInfo(props) {
  console.log('fired')
  if (!props.deetz) {
    return(

        "Specialty:" + `${props.specialty}` +
        "Weight:" + `${props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}\n` +
        "Highest Medal:" + `${props['highest medal achieved']}`
    );
  }
  return(
    null
  );
}

class HogCard extends React.Component{
  constructor(props){
    super(props)
    this.state={buttonClicked: false};
    this.changeState = this.changeState.bind(this);
  }

  // renderHiddenFields = (props) =>{
  //   return(
  //
  //   );
  // }

  changeState() {
    this.setState(state => ({
      buttonClicked: !state.buttonClicked
    }));
  }

    render(){
      return(
          <div className="pigTile">
              <h1>{this.props.name}</h1>
              <img src={this.props.findHogImg(this.props.name)} className="hog-image" alt={this.props.name}/>
              <h4>{this.props.greased}</h4>
              <div>
                <additionalInfo  />
                <button onClick={this.changeState}>{this.state.buttonClicked ? `${additionalInfo(this.props)}` : 'More Info'}</button>
              </div>
          </div>
      )
    }
  }

export default HogCard
