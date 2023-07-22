import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Conteiner from "../../componentes/Conteiner";
import Input from "../../componentes/Input";

import Botao from "../../componentes/Botao";
import "./cadastrarProduto.css";

const CadastrarProduto = () => {
  const navegar = useNavigate();

  const [form, setForm] = useState({
    modelo: "",
    marca: "",
    ano: "",
    preco: "",
    foto: "",
  });

  const atualizaForm = (evento) => {
    setForm({
      ...form,
      // outra maneira de criar uma propriedade no objeto:
      // usar a sintaxe de colchetes para criar uma chave dinâmica,
      // ou seja, o valor da variável será o nome da chave.
      // Neste caso, o valor da chave é igual ao ID do input.
      // Exemplo: <Input id="nome" etiqueta="Nome" />,
      // o valor da chave será "nome".
      [evento.target.id]: evento.target.value,
    });
  };

  const enviarCadastroProduto = () => {
    fetch("http://localhost:3000/carros", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form), // o form já possui a estrutura que o back end necessita
    }).then((response) => {
      if (response.ok) {
        alert("Produto cadastrado com sucesso!");
        navegar("/produtos"); // navega de volta para a lista de produtos
      } else {
        alert("Erro ao cadastrar o produto!");
      }
    });
  };

  return (
    <>
      <Conteiner>
        <Link to={-1}>Voltar</Link>
        <h1 className="CadastrarProduto__titulo">Cadastrar Produto</h1>
        <div className="CadastrarProduto__conteudo">
          <Input
            id="modelo"
            etiqueta="Modelo"
            valor={form.modelo}
            aoMudar={atualizaForm}
          />
          <Input
            id="marca"
            etiqueta="Marca"
            valor={form.marca}
            aoMudar={atualizaForm}
          />
          <Input
            id="ano"
            etiqueta="Ano"
            valor={form.ano}
            aoMudar={atualizaForm}
          />
          <Input
            id="preco"
            etiqueta="Preço"
            valor={form.preco}
            aoMudar={atualizaForm}
          />
          <Input
            id="foto"
            etiqueta="Link da foto"
            valor={form.foto}
            aoMudar={atualizaForm}
          />
          <Botao aoClicar={enviarCadastroProduto} titulo="Cadastrar Produto" />
        </div>
      </Conteiner>
    </>
  );
};

export default CadastrarProduto;
