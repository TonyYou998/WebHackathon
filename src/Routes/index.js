import HomePage from "../Container/HomeTemplate/HomePage";
import LoginPage from "../Container/HomeTemplate/LoginPage/LoginPage";
import RegisterPage from "../Container/HomeTemplate/RegisterPage/RegisterPage";
const routesHome=[
    {
        exact:true,
        path:"/",
        Component:HomePage,
    },
    {
        exact:false,
        path:"/dangnhap",
        Component:LoginPage,
    },
    {
        exact:false,
        path:'/dangky',
        Component:RegisterPage
    }

]

export {routesHome};