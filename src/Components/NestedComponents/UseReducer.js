import React,{useReducer} from 'react';
import {Button} from 'react-bootstrap';

const initialValues = {count:0,name:""}// set Initial value zero

//creating function to call & state will update the value & action will decide increment and decrement
function reducer(state,action) {
    //  console.log(action.types)//receiving dispatch type and value
    switch(action.type){
      case 'increment' : return {...state, count:state.count+1}
      case 'decrement' : return {...state, count:state.count-1}
      case 'reset' : return {...state, count:0, name:""}
      case 'updateName' : return{...state, name:action.value}
      default: 
    }
}
  




function UseReducer() {

    const [state,dispatch] = useReducer(reducer,initialValues);//using dispatch to call function reducer and set initial state value using 'initialValues'
   
  return <div className='container-fluid' >
      <Button variant='danger' onClick={()=>dispatch({type:'decrement'})}>-</Button>{/* when we click '-' button dispatch will triggered and its give type to reducer function and state will be update automatically*/}
      &nbsp;&nbsp;
      {state.count}
      &nbsp;&nbsp;
      <Button variant='success'  onClick={()=>dispatch({type:'increment'})}>+</Button>{/* when we click '+' button dispatch will triggered and its give type to reducer function and state will be update automatically */}
      <br/>
      <br/>
      <Button variant='warning' onClick={()=>dispatch({type:'reset'})}>Reset</Button>
      <br/>
      <br/>
      <input type={'text'} value={state.name} onChange={(e)=>dispatch({type:'updateName',value:e.target.value})}/>{/* sending type and value of input data */}
      <div>{state.name}</div>
    </div>
  
}

export default UseReducer
