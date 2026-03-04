import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import { Outlet } from "react-router-dom"



export default function MainLayout()
{


    return <>
    <Nav/>
   <Outlet/>
    <Footer/>
    </>

}