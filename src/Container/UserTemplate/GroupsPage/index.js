import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateClassButton from './Components/CreateClassButton'
import GroupItem from './Components/GroupItem'
import JoinClassButton from './Components/JoinClassButton'
import { actAddClassApi, actGetListGroupsApi } from './Modules/action'

function GroupsPage() {
    let dispatch=useDispatch();
    useEffect(() => {
        dispatch(actGetListGroupsApi());
    }, [])
    const data=useSelector(state=>state.groupsReducer.data);    
    const renderListGroup=()=>{
        if(data && data.length>0){
            return data.map((item,index)=>{
              //  console.log(item);
                return <GroupItem data={item}/>

            })
        }
    }
    
    return (
       
           <div className="group-container ">
               <div className="d-row   ">
                     <div className="content__wrapper" style={{overflowY:"scroll",height:"500px"}}>
                    
                      {renderListGroup()}
                      </div>
                    
                       
                      
                      
               </div>
               <div className="d-flex group__buttons pt-5">
                     <CreateClassButton/>
                     <JoinClassButton/>
               </div>
                 
           </div>
        
       
    )
}

export default GroupsPage
