import React from 'react'
import SVG from '../../SVG/SVG'

export default function Star({filled}) {
  return (
    <>
      <SVG className={`size-5 ${filled ? 'text-yellow-400':'text-zinc-400'}`} name='star'/>
    </>
  )
}
