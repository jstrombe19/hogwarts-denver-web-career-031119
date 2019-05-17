import React from 'react'
import HogCard from './HogCard'

class HogContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            allTheHogs: props.myHogs.map((elem, ndx)  => <HogCard findHogImg={props.findHogImg} {...elem} key={Date.now() + ndx} />)
        }
    }
    
    sortHogsAlphabetically = (e) => {
        const sortedHogs = this.state.allTheHogs.sort((alpha, beta) => alpha.props.name.localeCompare(beta.props.name));
        this.setState({
            allTheHogs: sortedHogs
        })
    }

    sortHogsByWeight = (e) => {
        const sortedHogs = this.state.allTheHogs.sort((alpha, beta) => alpha.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] - (beta.props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']));

        this.setState({
            allTheHogs: sortedHogs
        })
    }

    filterGreasedHogs = (e) => {
        const filteredHogs = this.state.allTheHogs.filter(hog => hog.props.greased)

        this.setState({
            allTheHogs: filteredHogs
        })
    }
    render() {
      return(
            <div>
                <h1>My Hogs</h1>
                <button onClick={this.sortHogsAlphabetically}>Sort Hogs Alphabetically</button>
                <button onClick={this.sortHogsByWeight}>Sort Hogs By Their Fat ASs Weight</button>
                <button onClick={this.filterGreasedHogs}>Filter the greasers</button>
                {this.state.allTheHogs}
            </div>
        )
    }
}


export default HogContainer
