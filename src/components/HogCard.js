import React from 'react'

const HogCard = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <h2>{props.specialty}</h2>
            <h3>{props.greased}</h3>
        </div>
    )
}

export default HogCard