import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Spinner from "../Components/Spinner";
import { useLazyGetMeQuery } from "../Store/api/userApi";
import { setUser, logout } from "../Store/features/userSlice";

function Root() {
  const { token, user } = useSelector((state) => state.user);
  if (user && user.role === "ADMIN") {
    navigate("/movies/create");
  }
  const [isInitialLoadCompleted, setIsInitialLoadCompleted] = useState(false);
  const dispatch = useDispatch();
  const [getUser] = useLazyGetMeQuery();
  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      navigate("/account");
    }
    getUser(undefined, false)
      .unwrap()
      .then((response) => dispatch(setUser(response)))
      .catch(() => dispatch(logout()))
      .finally(() => setIsInitialLoadCompleted(true));
  }, [token]);
  if (!isInitialLoadCompleted) return <Spinner />;

  return (
    <>
      <div className="bg-black">
        <Navbar user={user} />
        <div
          className="flex flex-wrap justify-between md:items-center"
          style={{ minHeight: "56vh" }}
        >
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Root;
