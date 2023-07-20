import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";

import "./login.css";

const Login = () => {
  return (
    <section>
      <div className="login__conteiner">
        <div className="login__titulo">
          <h1>Seja bem vindo!</h1>
          <p>Digite os seus dados de acesso:</p>
        </div>

        <form>
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
          <div className="login__form-acao">
            <Botao
              aoClicar={() => {
                alert("Clicou!!!");
              }}
              tipo="button"
              titulo="Entrar"
              cor="green"
            />
            <a href="#">Fazer cadastro</a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
