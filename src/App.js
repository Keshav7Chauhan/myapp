import React, { createContext, useContext } from 'react'
import ChildA from './Component/ChildA'
let ContextData=createContext();
function App() {
  let data1="keshav";
  let data2="lalan";
  return (
    <>
    <ContextData.Provider value={data1} >
    <ChildA />
    </ContextData.Provider>
    </>
  )
}

export default App
export {ContextData}