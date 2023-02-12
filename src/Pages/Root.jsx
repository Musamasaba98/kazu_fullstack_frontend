import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Root() {
  return (
    <>
      <div className="bg-black">
        <Navbar />
        <div className="flex flex-wrap items-center justify-between">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Root;
