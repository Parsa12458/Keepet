import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

function AppLayout() {
  return (
    <div>
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default AppLayout;
