import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img src="/icons/logo.svg" alt="کیپت" className="w-24" />
    </Link>
  );
}

export default Logo;
