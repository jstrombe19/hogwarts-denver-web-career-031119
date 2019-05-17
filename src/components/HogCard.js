import React from 'react'

const HogCard = (props) => {
    console.log(props)
    return(
        <div>
            <h1>{props.name}</h1>
            <h4>{props.specialty}</h4>
            <h4>{props.greased}</h4>
        </div>
    )
}

export default HogCard