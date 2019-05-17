import React from 'react'
import HogCard from './HogCard'

const HogContainer = (props) => {
    const allTheHogs = props.myHogs.map((elem, ndx)  => <HogCard {...elem} key={Date.now() + ndx}/>)

    return(
        <div>
            <h1>My Hogs</h1>
            {allTheHogs}
        </div>
    )
}


export default HogContainer