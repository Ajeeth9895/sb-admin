
import { Actions } from "./action";

//Setting Initial value
export let initialValues   = {
    data:[]
}

//Receiving data from Todo.js for action type
export function TodoReducer (state,action){
    switch(action.type){
        //case for add Todo list
        case Actions.ADD : var newData = [...state.data] //deep copy of data from initial values
                               newData.push({
                                 name:action.payload,
                                 completed:false
                               }) //pushing new name into 'newData' 
        
                               console.log(state);
        return {...state,
           data:newData //updating state to show newly added data
        } 
    
       //case for change Todo list
        case Actions.CHANGE :   
        var newData = [...state.data] //deep copy of data
        newData[action.payload.index].completed = action.payload.completed; //Assign true or false value to check in todo.js 28 line
        return {...state, data:newData}

        //case for clear Todo list
        case Actions.CLEAR:
            return initialValues;
        default:
    }
}