import React, { useState } from 'react'
import ChildOne from '../ChildOne/ChildOne'
import ChildTwo from '../ChildTwo/ChildTwo'
import './Parent.css'

const Parent = () => {
    const [check,setCheck] = useState(false)

  return (
    <div className='parent'>

        {
            check ? <ChildTwo/> : <ChildOne/>
        }
        <button className={check ? 'parentButton' : 'parentButtonL'} onClick={()=>setCheck(!check)} >{check ? 'Lights OFF' : 'Lights ON'}</button>
        
    </div>
  )
}

export default Parent