function InputField({
  id,
  label,
  type = "text",
  placeholder = "",
  accept,
  register,
  validationRules = {},
  autoComplete = "on",
  disabled = false,
}) {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <input
        type={type}
        className={`w-full rounded border border-brown bg-transparent px-2 py-1.5 text-sm font-medium text-brown focus:outline-none sm:py-1 dark:border-background dark:text-background ${disabled ? "cursor-not-allowed" : ""}`}
        id={id}
        placeholder={placeholder}
        accept={accept ? accept : ""}
        {...(register && register(id, validationRules))}
        autoComplete={autoComplete}
        disabled={disabled}
      />
    </div>
  );
}

export default InputField;
