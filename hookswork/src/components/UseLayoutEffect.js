import React,{useEffect,useLayoutEffect} from 'react'

export const UseLayoutEffect = () => {
//**Uses Before Render */
useLayoutEffect(()=>{
    console.log('something layoueffect');
},[])

//**Uses After Render */
useEffect(()=>{
    console.log('something effect');
},[])


  return (
    <div>UseLayoutEffect</div>
  )
}
