import { useDarkMode } from "../contexts/DarkModeContext";
import HeaderNavbar from "./HeaderNavbar";
import IconButton from "./IconButton";
import Logo from "./Logo";

function AppHeader() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <header className="dark:bg-darkBrown flex items-center justify-between px-12 py-6">
      <Logo />
      <HeaderNavbar />
      <div className="flex items-center justify-center gap-2">
        <IconButton onClick={toggleDarkMode}>
          {isDarkMode ? (
            <img src="/icons/sun-icon.svg" />
          ) : (
            <img src="/icons/moon-icon.svg" />
          )}
        </IconButton>
        <IconButton>
          {isDarkMode ? (
            <img src="/icons/user-dark-icon.svg" />
          ) : (
            <img src="/icons/user-icon.svg" />
          )}
        </IconButton>
      </div>
    </header>
  );
}

export default AppHeader;
