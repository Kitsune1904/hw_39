import {Navigation} from "./components/Navigation/Navigation.jsx";
import {Outlet} from "react-router-dom";

export const Page = () => {
  return (
    <>
      <Navigation></Navigation>
      <Outlet />
    </>
  )
}
