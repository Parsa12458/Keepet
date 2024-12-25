import HeaderNavbar from "./HeaderNavbar";
import IconButton from "./IconButton";
import Logo from "./Logo";

function AppHeader() {
  return (
    <header className="flex items-center justify-between px-12 py-6">
      <Logo />
      <HeaderNavbar />
      <div className="flex items-center justify-center gap-2">
        <IconButton>
          <img src="/icons/moon-icon.svg" />
        </IconButton>
        <IconButton>
          <img src="/icons/user-icon.svg" />
        </IconButton>
      </div>
    </header>
  );
}

export default AppHeader;
