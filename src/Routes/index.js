import HomePage from "../Container/HomeTemplate/HomePage";
import { UserPage } from "../Container/UserTemplate/UserPage";
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
        Component:UserPage,
    }
]

export {routesHome,routesUser};