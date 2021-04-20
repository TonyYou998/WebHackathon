import HomePage from "../Container/HomeTemplate/HomePage";
import { UserPage } from "../Container/UserTemplate/UserPage";
import { UserPageRemake } from "../Container/UserTemplate/UserPageRemake";
const routesHome=[
    {
        exact:true,
        path:"/",
        Component:HomePage,
    },
   

]

const routesUser=[
    {
        exact:false,
        path:"/profile",
        Component:UserPageRemake,
    }
]

export {routesHome,routesUser};