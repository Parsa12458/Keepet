import { useDarkMode } from "../contexts/DarkModeContext";
import EditUserForm from "../features/authentication/EditUserForm";
import HeaderNavbar from "./HeaderNavbar";
import IconButton from "./IconButton";
import Logo from "./Logo";
import Modal from "./Modal";
import Dropdown from "./Dropdown";
import React from "react";
import { useLogout } from "../features/authentication/useLogout";

function AppHeader() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  const { logout, isLoading } = useLogout();

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

        <Dropdown
          button={
            <IconButton>
              {isDarkMode ? (
                <img src="/icons/user-dark-icon.svg" />
              ) : (
                <img src="/icons/user-icon.svg" />
              )}
            </IconButton>
          }
          content={
            <React.Fragment>
              <Modal>
                <Modal.Open opens="editUser">
                  <li className="transition duration-200" tabIndex={0}>
                    <span>
                      {isDarkMode ? (
                        <img src="/icons/edit-dark-icon.svg" className="w-4" />
                      ) : (
                        <img src="/icons/edit-icon.svg" className="w-4" />
                      )}
                      <span>ویرایش اطلاعات</span>
                    </span>
                  </li>
                </Modal.Open>
                <Modal.Window name="editUser">
                  <EditUserForm />
                </Modal.Window>
              </Modal>
              <li className="transition duration-200" tabIndex={0}>
                <button
                  onClick={logout}
                  className="disabled:cursor-not-allowed disabled:opacity-80"
                  disabled={isLoading}
                >
                  <img
                    src="/icons/logout-icon.svg"
                    alt="user edit icon"
                    className="w-5"
                  />
                  <span className="text-red">خروج</span>
                </button>
              </li>
            </React.Fragment>
          }
        />
      </div>
    </header>
  );
}

export default AppHeader;
