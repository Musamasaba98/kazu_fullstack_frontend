import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Root() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/account");
    }
  }, [user]);

  return (
    <>
      {user && (
        <div className="bg-black">
          <Navbar />
          <div className="flex flex-wrap items-center justify-between">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Root;
