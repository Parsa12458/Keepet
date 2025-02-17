import { NavLink } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";
import useMediaQuery from "../hooks/useMediaQuery";

function HeaderNavbar() {
  const { isDarkMode } = useDarkMode();
  const isMdBreakpoint = useMediaQuery("(max-width: 700px)");
  return (
    <div className="flex items-center justify-center gap-8 px-5 font-semibold text-brown md:fixed md:bottom-4 md:left-1/2 md:z-50 md:w-max md:-translate-x-1/2 md:rounded md:bg-chocolateBrown/90 md:py-2.5 md:font-medium md:text-background sm:gap-5 dark:font-medium dark:text-background dark:md:bg-paleGreen/90 dark:md:text-brown">
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "border-b border-brown md:border-background dark:border-background md:dark:border-brown" : "border-b-transparent"} flex items-center justify-center gap-2 border-b px-2 pb-0.5 transition-all duration-200`
        }
        to="/pets"
      >
        {(isDarkMode && !isMdBreakpoint) || (isMdBreakpoint && !isDarkMode) ? (
          <img src="/icons/dog-dark-icon.svg" className="mb-1.5 w-5" />
        ) : (
          <img src="/icons/dog-icon.svg" className="mb-1.5 w-5" />
        )}

        <span className="sm:hidden">پت های من</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "border-b border-brown md:border-background dark:border-background md:dark:border-brown" : "border-b-transparent"} flex items-center justify-center gap-2 border-b px-2 pb-0.5 transition-all duration-200`
        }
        to="/requests"
      >
        {(isDarkMode && !isMdBreakpoint) || (isMdBreakpoint && !isDarkMode) ? (
          <img src="/icons/envelope-dark-icon.svg" className="mb-0.5 w-5" />
        ) : (
          <img src="/icons/envelope-icon.svg" className="mb-0.5 w-5" />
        )}
        <span className="sm:hidden">درخواست های من</span>
      </NavLink>
    </div>
  );
}

export default HeaderNavbar;
