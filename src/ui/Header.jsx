import { useDarkMode } from "../contexts/DarkModeContext";
import IconButton from "./IconButton";
import Logo from "./Logo";

function Header() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <div className="flex items-center justify-between px-12 py-6 sm:mb-2 lg:mb-6">
      <Logo />
      <IconButton onClick={toggleDarkMode}>
        {isDarkMode ? (
          <img src="/icons/sun-icon.svg" />
        ) : (
          <img src="/icons/moon-icon.svg" />
        )}
      </IconButton>
    </div>
  );
}

export default Header;
