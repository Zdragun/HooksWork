import React,{useState} from 'react'

export const UseRefHook = () => {
    const [numbers,setNumbers] = useState([1])

    const addNumber =() =>
    {
        const lastNumber = numbers.at(-1)
        console.log(lastNumber);
        setNumbers([...numbers,lastNumber + 1])
    }
  return (
    
    <div>
        <ul>
            {numbers.map((number)=>(
                <li key={number}>{number}</li>
            ))}
        </ul>
        <button onClick={addNumber}>add Number</button>
        </div>
  )
}
