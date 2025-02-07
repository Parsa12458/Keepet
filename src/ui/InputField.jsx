function InputField({ id, label, type = "text", placeholder = "", accept }) {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <input
        type={type}
        className="w-full rounded border border-brown bg-transparent px-2 py-1.5 text-sm font-medium text-brown focus:outline-none"
        id={id}
        placeholder={placeholder}
        accept={accept ? accept : ""}
      />
    </div>
  );
}

export default InputField;
