import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

export default function MainLayout({children}){
    return (
       <div className="w-[1264px] mx-auto"> <br/>
        <Sidebar/>
        <Outlet/>
       </div> 
    )
}