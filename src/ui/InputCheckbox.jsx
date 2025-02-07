function InputCheckbox({ id, label, register, validationRules }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <input
        type="checkbox"
        name={id}
        id={id}
        className="custom-checkbox"
        {...(register && register(id, validationRules))}
      />
      {label && (
        <label htmlFor={id} className="font-medium">
          {label}
        </label>
      )}
    </div>
  );
}

export default InputCheckbox;
