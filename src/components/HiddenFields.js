import React from 'react'

const HiddenFields = (props) => {
  return(
    <div className="deetz">
      <h2>Specialty:{props.specialty}</h2>
      <h2>Weight:{props['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h2>
      <h2>Highest Medal:{props['highest medal achieved']}</h2>
    </div>
  )
}

export default HiddenFields
