import HomePage from "../Container/HomeTemplate/HomePage";
import PageMain from "../Container/PageMain";
import ContactDetail from "../Container/PageMain/ContactDetail";
import LoginPage from "../Container/HomeTemplate/LoginPage/LoginPage";
import RegisterPage from "../Container/HomeTemplate/RegisterPage/RegisterPage";
import UserPageRemake from "../Container/UserTemplate/UserPageRemake";
import HomePageUser from "../Container/UserTemplate/HomePageUser";
import { MessagePage } from "../Container/UserTemplate/MessagePage";
import GroupsPage from "../Container/UserTemplate/GroupsPage";
import QuizPage from "../Container/UserTemplate/QuizPage";
import taoKenh from "../Container/UserTemplate/QuizPage/taoKenh";
import thamGia from "../Container/UserTemplate/QuizPage/thamGia";
import BoCauHoi from "../Container/UserTemplate/QuizPage/BoCauHoi";
import GroupPage from "../Container/UserTemplate/GroupsPage/GroupPage";
import { Loader } from "../Components/Loader";
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
    exact: false,
    path: "/dangnhap",
    Component: LoginPage,
  },
  {
    exact: false,
    path: "/dangky",
    Component: RegisterPage,
  },
];

const routesUser = [
  {
    exact: false,
    path: "/user/profile",
    Component: UserPageRemake,
  },

  {
    exact: false,
    path: "/user/homepage",
    Component: HomePageUser,
  },
  {
    exact: false,
    path: "/user/message",
    Component: MessagePage,
  },
  {
    exact: false,
    path: "/user/group",
    Component: GroupsPage,
  },
  {
    exact: false,
    path: "/user/quiz",
    Component: QuizPage,
  },
  {
    exact: false,
    path: "/user/taokenh",
    Component: BoCauHoi,
  },
  {
    exact: false,
    path: "/user/bode/:id",
    Component: taoKenh,
  },
  {
    exact: false,
    path: "/user/thamgia/:id",
    Component: thamGia,
  },
  {
    exact: false,
    path: "/user/groupid",
    Component: GroupPage,
  },
];

export { routesHome, routesUser };
