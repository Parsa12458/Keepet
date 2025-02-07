function InputSelect({ id, label, options, register, validationRules }) {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={id} className="text-xs">
        {label}
      </label>
      <div className="relative">
        <select
          name={id}
          id={id}
          className={`w-full cursor-pointer appearance-none rounded border border-brown bg-transparent px-2 py-1.5 text-sm font-medium text-brown focus:outline-none`}
          {...(register && register(id, validationRules))}
        >
          {options.map((option, i) => (
            <option value={option} key={i} className="bg-background">
              {option}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex w-9 items-center pl-4">
          <img src="/icons/arrow-down-icon.svg" />
        </div>
      </div>
    </div>
  );
}

export default InputSelect;
