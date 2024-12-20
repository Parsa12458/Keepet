import IconButton from "./IconButton";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex items-center justify-between px-12 py-6">
      <Logo />
      <IconButton>
        <img src="/icons/moon-icon.svg" />
      </IconButton>
    </div>
  );
}

export default Header;
