import { Footer } from "../components/footer/Footer"
import { Outlet } from "react-router-dom"
import { Navigation } from "../components/navigation/NavBar"
import { DataSource } from "../pages/DataSource"
export function Layouts() {
    
    return(
        <>
        <main>
         <Outlet />
         <Footer />
        </main>

        </>
    )
}