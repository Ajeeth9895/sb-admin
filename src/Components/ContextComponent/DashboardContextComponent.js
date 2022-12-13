import React from 'react';

export const DashboardContext = React.createContext();//creating useContext to store data


//function for DashboardContextComponent and reference child 
function DashboardContextComponent({children}) {

 //Dashboard data components
  let data = {
    earningsMonthly: "40,000",
    earningsYearly: "2,15,000",
    task: "50",
    pendingRequest: "18",
  };

  return <DashboardContext.Provider value={data}>
      {children}
  </DashboardContext.Provider>

}

export default DashboardContextComponent

