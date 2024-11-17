import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import NavBar from "../Pages/NavBar";


const HomeLayout = () => {
    return (
        <div>
            <NavBar></NavBar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;