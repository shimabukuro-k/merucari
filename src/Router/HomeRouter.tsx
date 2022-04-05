import { Home } from "../components/pages/Home";
import { Auction } from "../components/pages/Auction";
import { Info } from "../components/pages/Info";
import { Login } from "../components/pages/Login";
import { MyList } from "../components/pages/MyList";
import { PickUp } from "../components/pages/PickUp";
import { Recommendation } from "../components/pages/Recommendation";
import { Register } from "../components/pages/Register";
import { Todo } from "../components/pages/Todo";
import { ItemInfo } from "../components/pages/ItemInfo";
import { Page404 } from "../components/pages/Page404";

export const HomeRouter = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/auction",
    exact: false,
    children: <Auction />
  },
  {
    path: "/info",
    exact: false,
    children: <Info />
  },
  {
    path: "/login",
    exact: false,
    children: <Login />
  },
  {
    path: "/recommendation",
    exact: false,
    children: <Recommendation />
  },
  {
    path: "/mylist",
    exact: false,
    children: <MyList />
  },
  {
    path: "/pickup",
    exact: false,
    children: <PickUp />
  },
  {
    path: "/register",
    exact: false,
    children: <Register />
  },
  {
    path: "/todo",
    exact: false,
    children: <Todo />
  },
  {
    path: "/itemInfo",
    exact: false,
    children: <ItemInfo />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];