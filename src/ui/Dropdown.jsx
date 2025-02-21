function Dropdown({ button, content }) {
  return (
    <div className="dropdown dropdown-end">
      {button}
      <ul className="menu dropdown-content z-10 ml-1 mt-1 w-max divide-y divide-brown/40 rounded bg-paleGreen p-1 text-sm text-brown drop-shadow-sm sm:text-xs dark:divide-paleGreen/40 dark:bg-chocolateBrown dark:text-white">
        {content}
      </ul>
    </div>
  );
}

export default Dropdown;
