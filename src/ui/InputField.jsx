function InputField({ id, label, type = "text" }) {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <input
        type={type}
        className="bg-transparent w-full rounded border border-brown px-2 py-1.5 text-sm text-brown focus:outline-none"
      />
    </div>
  );
}

export default InputField;
