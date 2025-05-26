import React from 'react'
import {User, Search, CircleArrowLeft} from 'lucide-react'
import CarDets from '~/components/CarDets'
import ImageSection from '~/components/ImageSection'
import { carData } from '~/data'

const carShow = () => {
  return (
    <div className='h-full w-full bg-primary-500 bg-center'>
      <div className='flex justify-between px-10 pt-8'>
            <h1 className='font-aboreto text-prim'>Carso</h1>
            <div className='flex gap-16'>
              <Search size={50}/>
            <User size={50} className='mb-2'/>
            </div>
      </div>
      <ImageSection />
      <div className='pb-10'>
      <CarDets cardet={carData}/>
      </div>
    </div>
  )
}

export default carShow