import { NavLink } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

function HeaderNavbar() {
  const { isDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-center gap-8 font-semibold text-brown dark:font-medium dark:text-background">
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "border-b border-brown dark:border-background" : "border-b-transparent"} flex items-center justify-center gap-2 border-b px-2 pb-0.5 transition-all duration-200`
        }
        to="/pets"
      >
        {isDarkMode ? (
          <img src="/icons/dog-dark-icon.svg" className="mb-1.5 w-5" />
        ) : (
          <img src="/icons/dog-icon.svg" className="mb-1.5 w-5" />
        )}
        <span>پت های من</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "border-b border-brown dark:border-background" : "border-b-transparent"} flex items-center justify-center gap-2 border-b px-2 pb-0.5 transition-all duration-200`
        }
        to="/requests"
      >
        {isDarkMode ? (
          <img src="/icons/envelope-dark-icon.svg" className="mb-0.5 w-5" />
        ) : (
          <img src="/icons/envelope-icon.svg" className="mb-0.5 w-5" />
        )}
        <span>درخواست های من</span>
      </NavLink>
    </div>
  );
}

export default HeaderNavbar;
