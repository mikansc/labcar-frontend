import "./botao.css";

const Botao = (props) => {
  return (
    <button
      onClick={props.aoClicar}
      className="botao"
      type={props.tipo}
      style={{
        backgroundColor: props.cor,
      }}
    >
      {props.titulo}
    </button>
  );
};

export default Botao;
