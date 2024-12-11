import { Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <p>nav comp</p>
      <Outlet />
    </div>
  );
};

export default Navigation;
