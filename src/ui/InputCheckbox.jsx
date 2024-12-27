function InputCheckbox({ id, label }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <input type="checkbox" name={id} id={id} className="custom-checkbox" />
      {label && (
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
      )}
    </div>
  );
}

export default InputCheckbox;
