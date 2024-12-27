function InputTextarea({ label, id }) {
  return (
    <div className="flex flex-col items-start gap-0.5">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <textarea
        id={id}
        className="h-[34px] w-full rounded border border-brown bg-transparent px-2 py-1.5 text-sm font-medium text-brown focus:outline-none"
      />
    </div>
  );
}

export default InputTextarea;
