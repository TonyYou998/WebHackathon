import React, { Fragment } from 'react'
import Status from '../../HomePageUser/Status'
import Question from './Components/Question'

export default function GroupPage(props) {
    

    return (
        <div className="w-100 group__content">
             <div className="group__name   bg-light shadow py-4 pl-4  mr-5">
                    Web Design
            </div>
            <div class="pl-md-5 pt-4 all__conversation">
                <Status/>
                <Question/>
                <Question/>
                <Status/>
                <Status/>
                <Status/>

            </div> <div className="put__question pl-md-5 mt-2">
                <input placeholder="type your question" className="ml-5 pl-3 py-1 shadow-lg bg-white"/>
                
            </div>
           
                   
        </div>
        
    )
}
