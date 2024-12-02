'use client'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRate = () => {
    const [rate, setRate] = useState<number | null>(null)
    const [ratecolor, setRateColor] = useState(null)
  return (
    <div>
        
      {[...Array(5)].map((_, index) => {
         const currentRate = index + 1
        return (
            <label htmlFor="">
            <input type="radio" name="rating"  value={currentRate} onClick={() => setRate(currentRate)} className='hidden'/>
            <div className="reviews">
              <FaStar key={index} 
                color={currentRate <= (ratecolor! || rate) ? 'yellow' : 'black'}
              />
              </div>
              </label>
        )
      })}
    </div>
  )
}

export default StarRate
