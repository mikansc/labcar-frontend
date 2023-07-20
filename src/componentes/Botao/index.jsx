import "./botao.css";

const Botao = (props) => {
  return (
    <button
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
