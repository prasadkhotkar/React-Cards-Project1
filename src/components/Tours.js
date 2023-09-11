import React from 'react'
import "./Cards"
import Cards from './Cards'

function Tours({tours,removeTour}) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Traveler's Journey</h2>
      </div>
      <div className='cards'>
        {
          tours.map((tour)=>
          {
            return <Cards {...tour} key={tour.id} removeTour={removeTour}></Cards>
          } )
        }
      </div>
    </div>
  )
}

export default Tours
