import React from 'react'
import { ratingIndicatorResult } from '../common/ratingIndicatorResult'

export default function RatingCircle({value}:{value:number}) {
  return (
    <span className={`flex items-center rotate-45 justify-center font-bold w-[50px] h-[50px] border-8 text-white bg-black z-10 rounded-full ${ratingIndicatorResult(+value.toFixed(1))} `}>
    <span className="flex rotate-[-45deg]">{value.toFixed(1)}</span>
 </span>
  )
}
