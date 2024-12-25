import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

function AppLayout() {
  return (
    <div>
      <AppHeader />
      <div className="mx-auto max-w-screen-2xl px-20 pb-12 pt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
