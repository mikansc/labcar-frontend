import { Link, useNavigate } from "react-router-dom";
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";

import { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("teste@teste.com"); // usuario para testes
  const [senha, setSenha] = useState("abcd123"); // a senha correta é abcd1234

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

    //  ESSE CÓDIGO AQUI TÁ PARECENDO MUITO UMA FUNÇÃO DE LOGIN...
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    }).then((resposta) => {
      if (resposta.ok) {
        // "ok" é um atributo que existe na resposta do fetch
        // portanto se não deu erro de login ...
        navegar("/produtos");
      } else {
        alert("Dados inválidos"); // se deu erro no login
      }
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
            valor={email} // adicionei essa prop "valor" ao campo input
            aoMudar={(e) => setEmail(e.target.value)}
            tipo="text"
          />
          <Input
            etiqueta="Senha"
            id="senha"
            valor={senha} // adicionei essa prop "valor" ao campo input
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
