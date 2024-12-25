import { NavLink } from "react-router-dom";

function HeaderNavbar() {
  return (
    <div className="flex items-center justify-center gap-8 font-semibold text-brown">
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "border-b border-brown" : "border-b-transparent"} flex items-center justify-center gap-2 border-b px-2 pb-0.5 transition-all duration-200`
        }
        to="/pets"
      >
        <img src="/icons/dog-icon.svg" className="mb-1.5 w-5" />
        <span>پت های من</span>
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${isActive ? "border-b border-brown" : "border-b-transparent"} flex items-center justify-center gap-2 border-b px-2 pb-0.5 transition-all duration-200`
        }
        to="/requests"
      >
        <img src="/icons/envelope-icon.svg" className="mb-0.5 w-5" />
        <span>درخواست های من</span>
      </NavLink>
    </div>
  );
}

export default HeaderNavbar;
