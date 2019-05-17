import React from 'react'

const HogCard = (props) => {
    console.log(props.findHogImg(props.name))
    return(
        <div className="pigTile">
            <h1>{props.name}</h1>
            <img src={props.findHogImg(props.name)} className="hog-image" alt={props.name}/>
            <h4>{props.greased}</h4>
            <div style={{display: 'none'}} className="deetz">
              <h2>Specialty:{props.specialty}</h2>
              <h2>Weight:{props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h2>
              <h2>Highest Medal:{props['highest medal achieved']}</h2>
            </div>
        </div>
    )
}

export default HogCard
