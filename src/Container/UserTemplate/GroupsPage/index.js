import React from 'react'
import CreateClassButton from './Components/CreateClassButton'
import GroupItem from './Components/GroupItem'
import JoinClassButton from './Components/JoinClassButton'

function GroupsPage() {

    
    return (
       
           <div className="group-container ">
               <div className="d-row   ">
                    <GroupItem/>
                    <GroupItem/>
                     <GroupItem/>
                     <GroupItem/>
                     <GroupItem/>
                     <GroupItem/>
                     <GroupItem/>
                      <GroupItem/>
                       
                      
                      
               </div>
               <div className="d-flex group__buttons pt-5">
                     <CreateClassButton/>
                     <JoinClassButton/>
               </div>
                 
           </div>
        
       
    )
}

export default GroupsPage
