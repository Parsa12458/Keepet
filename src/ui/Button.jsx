function Button({
  children,
  type = "button",
  variation = "primary",
  additionalStyles = "",
}) {
  const primaryStyles = "bg-brown text-white";
  return (
    <button
      type={type}
      className={`rounded px-5 py-1.5 text-sm ${additionalStyles} ${variation === "primary" ? primaryStyles : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
