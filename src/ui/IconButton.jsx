function IconButton({ children }) {
  return (
    <button className="flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-brown p-1 transition-all duration-200 hover:bg-brown/15">
      {children}
    </button>
  );
}

export default IconButton;
