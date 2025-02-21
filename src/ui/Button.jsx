function Button({
  children,
  type = "button",
  variation = "primary",
  additionalStyles = "",
  onClick,
  isLoading = false,
}) {
  const primaryStyles =
    "bg-brown text-white dark:bg-paleGreen dark:text-chocolateBrown dark:font-medium";
  const secondaryStyles =
    "border border-brown font-medium text-brown dark:border-background dark:text-background dark:font-normal";
  const redStyles = "border border-red font-medium text-red dark:font-semibold";
  return (
    <button
      type={type}
      className={`flex items-center justify-center gap-2 rounded px-5 py-1.5 text-sm sm:text-xs ${additionalStyles} ${variation === "primary" ? primaryStyles : ""} ${variation === "secondary" ? secondaryStyles : ""} ${variation === "red" ? redStyles : ""}`}
      onClick={(e) => onClick?.(e)}
      disabled={isLoading}
    >
      {children}
      {isLoading && <div className="loading loading-spinner w-3"></div>}
    </button>
  );
}

export default Button;
