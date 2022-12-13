
import {useParams} from 'react-router-dom';
import React,{useState,useEffect,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom';
import { UserContext } from "./ContextComponent/UserContextComponent";

function EditUser( ) {
   let context = useContext(UserContext);

   //Receiving id value using useParams
   let {id} = useParams();

   //using navigate hook to perform navigation
   let navigate = useNavigate();
   
   let [name,setName] = useState("")
   let [email,setEmail] = useState("")
   let [mobile,setMobile] = useState("")
   let [batch,setBatch] = useState("")
   let [timing,setTiming] = useState("");

   let handleSubmit =()=>{
    let newData = {name,email,mobile,batch,timing}   //object declared 
    let newArray = [...context.users] //assign reference variable for 'users' using rest operator
    newArray.splice(id,1,newData)  //delete and replacing edited data in dashboard
    context.setUsers(newArray)   //update state to show old and new data 
    navigate('/dashboard')  //redirect for dashboard
  }

  //useEffect without dependency array
  // useEffect(()=>{
  //   console.log('Hello Effect');
  // })

  
  // useEffect with dependency array
  useEffect(()=>{
    if(id){
      setName(context.users[id].name)
      setEmail(context.users[id].email)
      setMobile(context.users[id].mobile)
      setBatch(context.users[id].batch)
      setTiming(context.users[id].timing)
    }
    else{
      navigate('/dashboard')
    }

  },[])

  // useEffect with dependency array and value
  // useEffect(()=>{
  //   console.log('Hello Effect');
  // },[mobile])


  return (
   <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" value={mobile} placeholder="Enter mobile" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" value={batch} placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Session Timing</Form.Label>
        <Form.Select defaultValue={timing} onChange={(e)=>setTiming(e.target.value)}>
          <option value='0' disabled >Session timings</option>
          <option value='10am to 12pm'>10am to 12pm</option>
          <option value='12pm to 2pm'>12pm to 2pm</option>
          <option value='2pm to 4pm'>2pm to 4pm</option>
          <option value='4pm to 6pm'>4pm to 6pm</option>
        </Form.Select>
      </Form.Group>
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>
   
    </div>
  )
}

export default EditUser;
