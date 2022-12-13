import React from "react";
import {Link,Outlet} from 'react-router-dom'

function NestedExample() {
  return <div>
      <h1>This is for nested example</h1>
      <ul>
      {/* using Link function for navigation  */}
      <Link to='profile'>
        <li>
          <div>Profile</div>
        </li>
      </Link>
      <Link to='account'>
        <li>
           <div>Accounts</div>
        </li>
       </Link>
       <Link to='use-ref'>
        <li>
           <div>Use-Ref</div>
        </li>
       </Link>
       <Link to='use-reducer'>
        <li>
           <div>Use-Reducer</div>
        </li>
       </Link>
       <Link to='/nested-example'>
        <li>
           <div>Nested Example</div>
        </li>
        </Link>
      </ul>
   <Outlet/> {/* {print same page} */}
    </div>
  
}

export default NestedExample;
