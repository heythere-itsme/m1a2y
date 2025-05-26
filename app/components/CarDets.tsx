import React from 'react'
import CarDetCard from './CarDetCard'

const CarDets = ({cardet}) => {
  return (
    <div className='cardetContainer'>
      <div className='flex gap-4 pl-8 pt-6'>
        <h3>{cardet.company}</h3>
        <h3>{cardet.model}</h3>
        <h3>{cardet.variant}</h3>
      </div>
      <div className='flex pl-8 gap-4 pt-3 pb-5'>
        <h2 className='w-fit'>About the Car: </h2>
        <div className='w-[1016px]'>
        <h2 className='opacity-70'>{cardet.abt}</h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-[20px] gap-y-[20px] w-fit mx-auto pb-20">
        <CarDetCard details={cardet.engine} title={"Engine"}/>
        <CarDetCard details={cardet.transmission} title={"Transmission"}/>
        <CarDetCard details={cardet.dimensionsAndWeight} title={"Dimensions & Weight"}/>
        <CarDetCard details={cardet.interiorFeatures} title={"Interior Features"}/>
        <CarDetCard details={cardet.exteriorFeatures} title={"Exterior Features"}/>
        <CarDetCard details={cardet.safetyFeatures} title={"Safety Features"}/>
        <CarDetCard details={cardet.otherFeatures} title={"Other Features"}/>
      </div>
    </div>
  )
}

export default CarDets