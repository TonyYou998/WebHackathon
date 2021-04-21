import HomePage from "../Container/HomeTemplate/HomePage";
import PageMain from "../Container/PageMain";
import ContactDetail from "../Container/PageMain/ContactDetail";
import LoginPage from "../Container/HomeTemplate/LoginPage/LoginPage";
import RegisterPage from "../Container/HomeTemplate/RegisterPage/RegisterPage";
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


export { routesHome };
