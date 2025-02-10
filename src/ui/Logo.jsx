import { Link } from "react-router-dom";
import { useDarkMode } from "../contexts/DarkModeContext";

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <Link to="/">
      {isDarkMode ? (
        <img src="/icons/logo-dark.svg" alt="کیپت" className="w-24" />
      ) : (
        <img src="/icons/logo.svg" alt="کیپت" className="w-24" />
      )}
    </Link>
  );
}

export default Logo;
