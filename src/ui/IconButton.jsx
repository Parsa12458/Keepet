function IconButton({ children, onClick }) {
  return (
    <button
      className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-brown p-1 transition-all duration-200 hover:bg-brown/15 sm:h-6 sm:w-6 dark:border-background dark:hover:bg-paleGreen/20"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default IconButton;
