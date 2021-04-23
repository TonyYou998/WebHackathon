import React from 'react'
import CreateClassButton from './Components/CreateClassButton'
import GroupItem from './Components/GroupItem'
import JoinClassButton from './Components/JoinClassButton'

function GroupsPage() {

    
    return (
       
           <div className="group-container d-flex">
               <div className="d-row" >
                    <GroupItem/>
                    <GroupItem/>
                     <GroupItem/>
                      <GroupItem/>
                      
               </div>
               
                  <CreateClassButton/>
                  <JoinClassButton/>
                 
           </div>
       
    )
}

export default GroupsPage
