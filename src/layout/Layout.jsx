import { Outlet } from "react-router-dom";

import { Topline, SideMenu } from "../components";



export const Layout = ({prevSection, nextSection}) => {
  return (
    <div style={{minHeight: "100vh"}}>
        <Topline/>
        <SideMenu
          prevSection={prevSection}
          nextSection={nextSection}
        />
        <Outlet/>
    </div>
  )
}
