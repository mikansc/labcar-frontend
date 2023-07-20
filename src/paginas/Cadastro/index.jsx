import { Link } from "react-router-dom";
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";

import "./cadastro.css";

const Cadastro = () => {
  return (
    <section>
      <div className="cadastro__conteiner">
        <div className="cadastro__titulo">
          <h1>Cadastro</h1>
          <p>Cadastre-se para acessar o sistema</p>
        </div>

        <form>
          <Input
            etiqueta="Nome"
            id="nome"
            aoMudar={(e) => console.log(e.target.value)}
            tipo="text"
          />
          <Input
            etiqueta="Email"
            id="email"
            aoMudar={(e) => console.log(e.target.value)}
            tipo="text"
          />
          <Input
            etiqueta="Senha"
            id="senha"
            aoMudar={(e) => console.log(e.target.value)}
            tipo="password"
          />
          <div className="cadastro__form-acao">
            <Botao
              aoClicar={() => {
                alert("Clicou!!!");
              }}
              tipo="button"
              titulo="Cadastrar"
              cor="green"
            />
            <Link to="/">Voltar para o login</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Cadastro;
