import React,{useReducer,useState} from 'react';
import { TodoReducer,initialValues } from './ReducerComponents/TodoReducer';
import { Form } from 'react-bootstrap';
import {Button}  from 'react-bootstrap';
import { Actions } from './ReducerComponents/action';

function Todo() {
  //using reducer hook to perform state management
  const [state,dispatch] = useReducer(TodoReducer,initialValues);
  let [name,setName] = useState("")
  return<div className='container-fluid'>
     <h1 style={{textAlign:"center"}}>Today's Task</h1>
     <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control value={name} type="text" placeholder="Enter name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Button variant='primary' onClick={()=>{
        dispatch({type:Actions.ADD, payload:name})//sending data to TodoReducer
        setName("")
        }}>Create</Button>
     <br/>
     <br/>
     <div style={{textAlign:"center"}}>
        {
          state.data.map((e,i)=>{
             return<div key={i}>
              {
                //function for Toggling 
                e.completed?
                <li onClick={()=>dispatch({type:Actions.CHANGE,payload:{index:i,completed:false}})}><s>{e.name}</s></li>:
                <li onClick={()=>dispatch({type:Actions.CHANGE,payload:{index:i,completed:true}})}>{e.name}</li> 
              }
             </div>
          })
        }
     </div>

     {/* Button for clear function */}
     <Button variant='primary' onClick={()=>{
        dispatch({type:Actions.CLEAR})
        }}>Clear All</Button>
   

  </div>
}

export default Todo
