
import React,{useState,useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate} from 'react-router-dom';
import { UserContext } from "./ContextComponent/UserContextComponent";


function AddUser() {

  let context = useContext(UserContext);//using use context hook to receive value

  let [name,setName] = useState("")
  let [email,setEmail] = useState("")
  let [mobile,setMobile] = useState("")
  let [batch,setBatch] = useState("")
  let [timing,setTiming] = useState("");

  let navigate = useNavigate();

  let handleSubmit =()=>{
    let newData = {name,email,mobile,batch,timing}
    let newArray = [...context.users]//deep copy of users
    newArray.push(newData)//pushing new data 
    context.setUsers(newArray)// updating state
    navigate('/dashboard') //navigate function to dashboard
  }

  return <>
   <div className='container-fluid'>
    <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter mobile" onChange={(e)=>setMobile(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Batch</Form.Label>
        <Form.Control type="text" placeholder="Enter Batch" onChange={(e)=>setBatch(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Session Timing</Form.Label>
        <Form.Select defaultValue={'0'} onChange={(e)=>setTiming(e.target.value)}>
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
    </>
}

export default AddUser;
