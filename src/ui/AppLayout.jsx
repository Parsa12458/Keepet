import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";

function AppLayout() {
  return (
    <div>
      <AppHeader />
      <div className="mx-auto max-w-[1440px] bg-background px-20 pb-12 pt-4 sm:px-10 dark:bg-darkBrown">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
