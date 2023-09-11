import React from 'react'
import "./Cards"
import Cards from './Cards'

function Tours({tours,removeTour}) {
  return (
    <div>
      <div>
        <h2>Tours website</h2>
      </div>
      <div>
        {
          tours.map((tour)=>
          {
            return <Cards {...tour} removeTour={removeTour}></Cards>
          } )
        }
      </div>
    </div>
  )
}

export default Tours
