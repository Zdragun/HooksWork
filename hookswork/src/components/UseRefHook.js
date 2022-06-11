import React,{useState,useRef} from 'react'

export const UseRefHook = () => {
/*     const [numbers,setNumbers] = useState([1])] */
    const [state,setState] = useState([])
    const inpRef = useRef(null);
    
    const onClick = () =>
    {
       console.log(inpRef.current.value);
       setState(inpRef.current.value)
    }
   
  return (
    
    <div>
     <input  ref={inpRef} type="text" placeholder='Type Text' />  
    
    <button onClick={onClick} >add Number</button>
    <ul >
    <li>{state}</li>
    </ul>
   
        </div>
  )
}
