import React from 'react'
import Filter1 from './Filter1'
import Filter2 from './Filter2'
import Filter3 from './Filter3'
import Filter4 from './Filter4'
import Filter5 from './Filter5'
import Filter6 from './Filter6'

export const Filter = () => {
  return (
    <div className='flex mx-12'>
        <Filter1/>
        <Filter2/>
        <Filter3/>
        <Filter4/>
        <Filter5/>
        <Filter6/>
    </div>
  )
}

export default Filter
