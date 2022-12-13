import React,{useEffect,useRef, useState} from 'react'
import { Button } from 'react-bootstrap';

function UseRef() {
 
    let [name,setName] = useState("");//using useState Hook 

    //using useRef hook
    let count = useRef(0);
    let rollRef = useRef(null);

    //using useEffect hook
    useEffect(()=>{
        count.current = count.current+1;
    })

  return <>
      <h1>Use Ref</h1>
     <input type={'text'} value={name} onChange={(e)=>setName(e.target.value)} placeholder={'Enter name'}/>
       <div>{count.current}</div><br/>
      <input type={'text'}  placeholder='Roll no' ref={rollRef}/><br/><br/>
      <Button variant='primary' onClick={()=>rollRef.current.focus()}>Click me focus</Button> 
  </>
}

export default UseRef
