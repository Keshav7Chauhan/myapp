import React, { useContext } from 'react'
import { ContextData } from '../App' 

function ChildB() {
    let data=useContext(ContextData);
  return (
    <>
    <div>
      {data}
    </div>
    </>
  )
}

export default ChildB
