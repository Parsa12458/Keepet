function FullSpinner() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background dark:bg-darkBrown">
      <div className="loading loading-dots w-72 bg-brown"></div>
    </div>
  );
}

export default FullSpinner;
