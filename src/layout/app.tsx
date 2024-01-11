import { Outlet } from "react-router-dom";
// import Footer from "../components/footer";
import Navbar from "../components/Navbar";
const App_Layout = () => {
    return (
        <div className="h-screen">
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default App_Layout;