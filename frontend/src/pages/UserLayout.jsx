import { Outlet } from "react-router"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function UserLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}