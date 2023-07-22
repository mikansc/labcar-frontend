import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Botao from "../../componentes/Botao";
import Input from "../../componentes/Input";

import "./cadastro.css";

const Cadastro = () => {
  const navegar = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const atualizarForm = (valor, campo) => {
    console.log(`Campo ${campo}: ${valor}`);

    if (campo === "nome") {
      setForm({ ...form, nome: valor });
      // { nome: 'Fulano', email: '' , senha: '',  }
    }

    if (campo === "email") {
      setForm({ ...form, email: valor });
    }

    if (campo === "senha") {
      setForm({ ...form, senha: valor });
    }
  };

  const enviaDadosParaBackend = () => {
    fetch("http://localhost:3000/usuarios", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then(() => {
      navegar("/");
    });
  };

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
            aoMudar={(e) => atualizarForm(e.target.value, "nome")}
            tipo="text"
          />
          <Input
            etiqueta="Email"
            id="email"
            aoMudar={(e) => atualizarForm(e.target.value, "email")}
            tipo="text"
          />
          <Input
            etiqueta="Senha"
            id="senha"
            aoMudar={(e) => atualizarForm(e.target.value, "senha")}
            tipo="password"
          />
          <div className="cadastro__form-acao">
            <Botao
              aoClicar={() => {
                enviaDadosParaBackend();
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

// DICA: Usar este trecho de código dentro do componente para visualizar o estado
/*
<p>
  Estado:
  <code>{JSON.stringify(form)}</code>
</p>
*/
