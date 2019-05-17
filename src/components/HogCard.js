import React from 'react'

const HogCard = (props) => {
    console.log(props.findHogImg(props.name))
    return(
        <div className="pigTile">
            <h1>{props.name}</h1>
            <img src={props.findHogImg(props.name)} alt={props.name}/>
            <h4>{props.greased}</h4>
        </div>
    )
}

export default HogCard
