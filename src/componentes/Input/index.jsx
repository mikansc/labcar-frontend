import "./input.css";

const Input = (props) => {
  return (
    <div className="input__input-group">
      <label className="input__input-label" htmlFor={props.id}>
        {props.etiqueta}
      </label>
      <div className="input__input-element">
        <input
          defaultValue={props.valor} // a prop "valor" foi adicionada aqui pra carregar valor inicial
          id={props.id}
          type={props.tipo}
          onChange={props.aoMudar}
        />
      </div>
    </div>
  );
};

export default Input;
