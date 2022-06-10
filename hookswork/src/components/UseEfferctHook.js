import React,{useEffect,useState} from 'react'

export const UseEfferctHook = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    const FetchData = async() => 
    {
        const FetchCom =  await fetch("https://jsonplaceholder.typicode.com/comments")
        const FetchedComments =  await FetchCom.json() 
        setData(FetchedComments[4].name)
    }

    useEffect(() => {
        FetchData();
        console.log('render');
    },[])
    


  return (
    <div>
    Hello World
    <h1>{data}</h1>
    <h1>{count}</h1>
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Click
    </button>
  </div>
  )
}
