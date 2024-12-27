import { toCamelCase } from "../utils/helper";

function InputSelect({ id, label, options }) {
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
        >
          {options.map((option, i) => (
            <option
              value={toCamelCase(option)}
              key={i}
              className="bg-background"
            >
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
