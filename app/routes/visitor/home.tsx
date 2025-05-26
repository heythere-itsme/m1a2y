import React from 'react'
import {User, ChevronDown} from 'lucide-react'
import CarCards from '~/components/CarCards'

const home = () => {
  return (
    <div className='h-screen w-full bg-primary-500 bg-center'>
      <div className='flex justify-between px-10 pt-8'>
            <h1 className='font-aboreto text-prim'>Carso</h1>
            <User size={50} className='mb-2'/>
      </div>
      
      <div className='search-bar'>
        <div className='border-r-[1px]'>
            <h2>Company</h2>
            <ChevronDown strokeWidth={1}/>
        </div>
        <div className='border-r-[1px]'>
            <h2>Engine</h2>
            <ChevronDown strokeWidth={1}/>
        </div>
        <div>
            <h2 className='text-right'>Search Car</h2>
        </div>
      </div>
      
      <div className='card-container'>
      <CarCards company='McLaren' model='750S' year={2023} img='/WD_Project/McLaren_750S_001-scaled-e1682609642863.jpg' color='#F08736'/>
      <CarCards company='Bentley' model='GTC Azure' year={2022} img='/WD_Project/GTC Azure Media 1.1.jpg' color='#3E537F'/>
      <CarCards company='Mercedes-Benz' model='A200 D' year={2013} img='/WD_Project/Mercedes-Benz-A200d5-1-640x480.jpg' color='#3DDE0E9'/>
      <CarCards company='McLaren' model='750S' year={2013} img='/WD_Project/McLaren_750S_001-scaled-e1682609642863.jpg' color='#F08736'/>
      <CarCards company='McLaren' model='750S' year={2013} img='/WD_Project/McLaren_750S_001-scaled-e1682609642863.jpg' color='#F08736'/>
      <CarCards company='Tesla' model='Cybertruck' year={2018} img='/WD_Project/1-2025-tesla-cybertruck-front-view.webp' color='#F0F1F3'/>
      </div>
    </div>
  )
}

export default home