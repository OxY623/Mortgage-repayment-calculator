import "./RadioGroup.css";

type Props = {
  label: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
};

function RadioGroup({ label, options, selected, onChange }: Props) {
  return (
    <fieldset className="radio-group">
      <legend>{label}</legend>
      {options.map((option) => (
        <div className="radio-container" key={option}>
          <label htmlFor={option} className="radio-option">
            <input
              id={label}
              type="radio"
              name={label}
              value={option}
              checked={selected === option}
              onChange={() => onChange(option)}
            />
            {option}
          </label>
        </div>
      ))}
    </fieldset>
  );
}

export { RadioGroup };
