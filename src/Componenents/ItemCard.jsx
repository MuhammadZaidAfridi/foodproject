import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import {MdDelete} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/CartSlice';

function ItemCard({id,name,price,img,qty}) {
  const dispatch = useDispatch();
  return (
    <div className='flex gap-5 shadow-md rounded-md p-3 mb-2'>
      <MdDelete 
      onClick={()=>dispatch(removeFromCart({id,name,img,price,qty:1}))} className='absolute right-12 text-gray-700 cursor-pointer' />
      <img src={img} alt=""
        className='w-[50px] h-[50px]' />
      <div className=''>
        <h2 className='font-bold text-gray-500'>{name}</h2>
        <div className='flex justify-between items-center'>
          <span className='text-green-500 font-bold '>${price}</span>
          <div className='flex justify-center items-center absolute right-10'>
            <p className='font-semibold text-sm  cursor-pointer  px-3 ease-linear transition-all'><FiMinus className='border text-xl p-[2px] hover:bg-green-500 hover:text-white'/></p>
            <span>{qty}</span>
            <p className='font-semibold text-sm   cursor-pointer   px-3 ease-linear transition-all'><FaPlus className='border  text-xl p-[2px] hover:bg-green-500 hover:text-white' /></p>
           
          </div>
        </div>


      </div>
    </div>
  )
}

export default ItemCard