import React from 'react'
import { useForm } from "react-hook-form";
import {User, X} from 'lucide-react'
import Form1 from '~/components/form1';
import { Outlet } from 'react-router';


const form = () => {

  return (
    <div className='h-[100vh] w-full bg-primary-500 bg-center'>
      <div className='flex justify-between px-10 pt-8 pb-10'>
        <h1 className='font-aboreto text-prim'>Carso</h1>
        <User size={50} className='mb-2'/>
      </div>
      <div className='w-fit mx-auto flex gap-5 relative'>
      <X size={50} strokeWidth={1} className='absolute top-3 -left-20'/>
      <Outlet />
      </div>
    </div>
  );
}

export default form