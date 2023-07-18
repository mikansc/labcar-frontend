import "./botao.css";

const Botao = (props) => {
  return (
    <button
      className="botao"
      style={{
        backgroundColor: props.cor,
      }}
    >
      {props.titulo}
    </button>
  );
};

export default Botao;
