import React, { useEffect, useState } from 'react'
import endpoints from '../services/movieServices';
import { video } from '../Mock/Video';

export const Hero = () => {
    
  return (
    <>
    <div className='flex justify-evenly'>
        <div>
          {video.map((data) => (
            <video width="320" height="240" controls>
            <source src={data.file} type="video/mp4" />
            </video>
          ))}
        </div>
    </div>
    </>
  )
}
export default Hero;