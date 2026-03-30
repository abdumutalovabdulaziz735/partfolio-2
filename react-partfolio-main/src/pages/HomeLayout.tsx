import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default HomeLayout;
