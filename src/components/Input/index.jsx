import "./input.css";

const Input = (props) => {
  const { label, id, ...rest } = props;
  return (
    <div className="input__input-group">
      <label className="input__input-label" htmlFor={id}>
        {label}
      </label>
      <div className="input__input-element">
        <input id={id} type="text" {...rest} />
      </div>
    </div>
  );
};

export default Input;
