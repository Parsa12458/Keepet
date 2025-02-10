import { useDarkMode } from "../contexts/DarkModeContext";
import EditUserForm from "../features/authentication/EditUserForm";
import HeaderNavbar from "./HeaderNavbar";
import IconButton from "./IconButton";
import Logo from "./Logo";
import Modal from "./Modal";

function AppHeader() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <header className="flex items-center justify-between px-12 py-6 dark:bg-darkBrown">
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
        <Modal>
          <Modal.Open opens="editUser">
            <IconButton>
              {isDarkMode ? (
                <img src="/icons/user-dark-icon.svg" />
              ) : (
                <img src="/icons/user-icon.svg" />
              )}
            </IconButton>
          </Modal.Open>
          <Modal.Window name="editUser">
            <EditUserForm />
          </Modal.Window>
        </Modal>
      </div>
    </header>
  );
}

export default AppHeader;
