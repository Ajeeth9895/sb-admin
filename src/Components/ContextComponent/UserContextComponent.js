import React,{useState} from 'react';

export const UserContext = React.createContext();//creating useContext to store data

//function for UserContextComponent and reference child 
function UserContextComponent({children}) {

      //user component data
      let [users,setUsers] = useState([
        {
          name:'Ajeeth',
          email:'ajeeth@gmail.com',
          mobile:'8098333881',
          batch:'B38WET',
          timing:'10am to 12pm'
        },
        {
          name:'Vishnu',
          email:'vishnu@gmail.com',
          mobile:'8098333881',
          batch:'B38WET',
          timing:'10am to 12pm'
        },
        {
          name:'Bala',
          email:'balaji@gmail.com',
          mobile:'8098333881',
          batch:'B38WET',
          timing:'10am to 12pm'
        },
        {
          name:'Gopal',
          email:'gopal@gmail.com',
          mobile:'8098333881',
          batch:'B38WET',
          timing:'10am to 12pm'
        },
        {
          name:'vino',
          email:'vino@gmail.com',
          mobile:'8098333881',
          batch:'B38WET',
          timing:'12pm to 2pm'
        },
      ]) 

      return <UserContext.Provider value={{users,setUsers}}>
       {children}
      </UserContext.Provider>
  
}

export default UserContextComponent;
