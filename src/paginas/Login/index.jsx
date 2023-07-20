import { Link, useNavigate } from "react-router-dom";
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";

import { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navegar = useNavigate();

  const confirmarLogin = () => {
    if (email === "") {
      alert("Digite um e-mail válido");
      return;
    }

    if (senha === "") {
      alert("Digite uma senha válida");
      return;
    }

    navegar("lista-produtos");

    //  ESSE CÓDIGO AQUI TÁ PARECENDO MUITO UMA FUNÇÃO DE LOGIN...
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    }).then(() => {
      navegar("lista-produtos");
    });
  };

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
            aoMudar={(e) => setEmail(e.target.value)}
            tipo="text"
          />
          <Input
            etiqueta="Senha"
            id="senha"
            aoMudar={(e) => setSenha(e.target.value)}
            tipo="password"
          />
          <div className="login__form-acao">
            <Botao
              aoClicar={confirmarLogin}
              tipo="button"
              titulo="Entrar"
              cor="green"
            />
            <Link to="cadastro">Fazer cadastro</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
