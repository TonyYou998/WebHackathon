import HomePage from "../Container/HomeTemplate/HomePage";
import PageMain from "../Container/PageMain";
import ContactDetail from "../Container/PageMain/ContactDetail";
import LoginPage from "../Container/HomeTemplate/LoginPage/LoginPage";
import RegisterPage from "../Container/HomeTemplate/RegisterPage/RegisterPage";
import  UserPageRemake  from "../Container/UserTemplate/UserPageRemake";
import HomePageUser from "../Container/UserTemplate/HomePageUser";
const routesHome = [
  {
    exact: true,
    path: "/",
    Component: PageMain,
  },
  {
    path: "/contact",
    Component: ContactDetail,
    exact: false,
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
];




const routesUser=[
    {
        exact:false,
        path:"/user/profile",
        Component:UserPageRemake,
    },
    {
        exact:false,
        path:"/user/homepage",
        Component:HomePageUser,
    }
]

export {routesHome,routesUser};
