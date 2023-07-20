import "./input.css";

const Input = (props) => {
  return (
    <div className="input__input-group">
      <label className="input__input-label" htmlFor={props.id}>
        {props.etiqueta}
      </label>
      <div className="input__input-element">
        <input id={props.id} type={props.tipo} onChange={props.aoMudar} />
      </div>
    </div>
  );
};

{
  /* <input id={id} type="text" {...rest} />; */
}

/*
React.createElement('input', {id: id, type: 'text', onChange: ()=>{}, temErro: false, tipo: "text"})


*/

export default Input;
