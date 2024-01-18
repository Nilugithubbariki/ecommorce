import Header from "./components/Header";
import { Outlet } from "react-router-dom";
const ApplayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default ApplayOut;
