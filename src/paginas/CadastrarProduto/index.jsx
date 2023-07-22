import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Conteiner from "../../componentes/Conteiner";
import Input from "../../componentes/Input";

import Botao from "../../componentes/Botao";
import "./cadastrarProduto.css";

// Esta página pode ser utilizada tanto para cadastro de produtos
// quanto para edição de produtos. Basta informar a propriedade "modoEdicao: true"
// para o componente <CadastrarProduto /> executar o useEffect, buscar o produto
// pelo ID e preencher o formulário com os dados do produto.
//
// Aqui, inicializamos a prop com o valor \/ "false"
const CadastrarProduto = ({ modoEdicao = false }) => {
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

  const enviarAtualizacaoProduto = () => {
    fetch(`http://localhost:3000/carros/${produtoId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form), // o form já possui a estrutura que o back end necessita
    }).then((response) => {
      if (response.ok) {
        alert("Produto atualizado com sucesso!");
        navegar("/produtos"); // navega de volta para a lista de produtos
      } else {
        alert("Erro ao atualizar o produto!");
      }
    });
  };

  // este hook do React Router retorna um objeto com os parâmetros da URL
  // Exemplo: /editar/1
  // 1 é o ID do produto que queremos editar
  const produtoId = useParams().id;
  // se não existir o parâmetro "id" na URL, o valor de produtoId será undefined

  // caso esteja no modo criação (url: /produtos/novo), não precisamos buscar o produto
  // pelo ID, então o useEffect não será executado.
  useEffect(() => {
    // se a prop "modoEdicao" for true, então estamos editando um produto
    if (modoEdicao) {
      // buscamos o produto pelo ID
      fetch(`http://localhost:3000/carros/${produtoId}`)
        .then((response) => response.json())
        .then((produto) => {
          // atualizamos o estado "form" com os dados do produto
          // Isto só funciona porque o nome das chaves do objeto "form"
          // são iguais aos nomes das chaves do objeto "produto" que vem
          // do back end.
          setForm(produto);
        });
    }
    // precisamos informar a dependência "modoEdicao" para que o useEffect
    // seja executado toda vez que o valor de "modoEdicao" for alterado.
  }, [modoEdicao, produtoId]);

  return (
    <>
      <Conteiner>
        <Link to={-1}>Voltar</Link>
        <h1 className="CadastrarProduto__titulo">
          {/* 
            Se a prop "modoEdicao" for true, o título será "Editar Produto",
          */}
          {modoEdicao ? "Cadastrar" : "Editar"} Produto
        </h1>
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
          {/* 
            Se a prop "modoEdicao" for true, o botão será "Atualizar Produto",
            caso contrário, será "Cadastrar Produto". A função que será executada
            ao clicar no botão também muda de acordo com o valor da prop "modoEdicao".
          */}
          {modoEdicao ? (
            <Botao
              aoClicar={enviarAtualizacaoProduto}
              titulo="Atualizar Produto"
            />
          ) : (
            <Botao
              aoClicar={enviarCadastroProduto}
              titulo="Cadastrar Produto"
            />
          )}
        </div>
      </Conteiner>
    </>
  );
};

export default CadastrarProduto;
