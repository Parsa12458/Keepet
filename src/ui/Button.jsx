function Button({
  children,
  type = "button",
  variation = "primary",
  additionalStyles = "",
  onClick,
}) {
  const primaryStyles = "bg-brown text-white";
  const secondaryStyles = "border border-brown font-medium text-brown";
  const redStyles = "border border-red font-medium text-red";
  return (
    <button
      type={type}
      className={`rounded px-5 py-1.5 text-sm ${additionalStyles} ${variation === "primary" ? primaryStyles : ""} ${variation === "secondary" ? secondaryStyles : ""} ${variation === "red" ? redStyles : ""}`}
      onClick={(e) => onClick?.(e)}
    >
      {children}
    </button>
  );
}

export default Button;
