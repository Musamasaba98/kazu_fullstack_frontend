import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Root() {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (user === null) {
      navigate("/account");
    }
  }, []);

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
