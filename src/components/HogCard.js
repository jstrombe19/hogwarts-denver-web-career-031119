import React from 'react'
import HiddenFields from './HiddenFields'

class HogCard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      buttonClicked: false
    }
  }

  renderHiddenFields = (props) =>{
    return(
      <div className="deetz">
        <h2>Specialty:{this.props.specialty}</h2>
        <h2>Weight:{this.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h2>
        <h2>Highest Medal:{this.props['highest medal achieved']}</h2>
      </div>
    )
  }

  changeState = () => {
    this.setState({buttonClicked: true})
  }

    render(){
      return(
          <div className="pigTile">
              <h1>{this.props.name}</h1>
              <img src={this.props.findHogImg(this.props.name)} className="hog-image" alt={this.props.name}/>
              <h4>{this.props.greased}</h4>
              <button onClick={this.changeState}>More Info!</button>
              <h4>{this.state.buttonClicked ? this.renderHiddenFields : console.log("false")}</h4>
          </div>
      )
    }
  }

export default HogCard
