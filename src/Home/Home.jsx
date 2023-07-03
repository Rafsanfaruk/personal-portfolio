import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
           <div className="max-w-screen-xl mx-auto">
           <Outlet></Outlet>
           </div>
            <Footer />
        </div>
    );
};

export default Home;