import { Link } from "react-router-dom";
import Conteiner from "../../componentes/Conteiner";

import { useEffect, useState } from "react";
import Botao from "../../componentes/Botao";
import "./listaProdutos.css";

const ListaProdutos = () => {
  // este estado vai armazenar a lista de produtos
  const [carros, setCarros] = useState([]);

  const buscarProdutos = () => {
    // esta função vai buscar a lista de produtos no back end.
    fetch("http://localhost:3000/carros")
      .then((response) => response.json())
      .then((dados) => setCarros(dados));
  };

  const apagarProduto = (id) => {
    // primeiro, confirmamos se o usuário realmente quer apagar o produto
    if (window.confirm("Deseja mesmo apagar este produto?")) {
      // se ele quiser, apagamos o produto chamando o back end
      fetch(`http://localhost:3000/carros/${id}`, {
        method: "DELETE",
      }).then(() => {
        // depois de apagar o produto, atualizamos a lista de produtos
        buscarProdutos();
      });
    }
  };

  useEffect(() => {
    buscarProdutos(); // aqui chamamos a função buscarProdutos
  }, []);

  return (
    <>
      <Conteiner>
        <Link to="/">Voltar</Link>
        <h1 className="ListaProdutos__titulo">Página de Lista de Produtos</h1>
        <div className="ListaProdutos__conteudo">
          <table className="ListaProdutos__tabela">
            <thead className="ListaProdutos__tabela-head">
              <tr className="ListaProdutos__tabela-row">
                <th className="ListaProdutos__tabela-head-cell">Modelo</th>
                <th className="ListaProdutos__tabela-head-cell">Marca</th>
                <th className="ListaProdutos__tabela-head-cell">Ano</th>
                <th className="ListaProdutos__tabela-head-cell">Ação</th>
              </tr>
            </thead>
            <tbody className="ListaProdutos__tabela-body">
              {carros.map((carro) => (
                <tr key={carro.id} className="ListaProdutos__tabela-row">
                  <td className="ListaProdutos__tabela-cell">{carro.modelo}</td>
                  <td className="ListaProdutos__tabela-cell">{carro.marca}</td>
                  <td className="ListaProdutos__tabela-cell">{carro.ano}</td>
                  <td className="ListaProdutos__tabela-cell">
                    <Link
                      className="ListaProdutos__botao-editar"
                      to={`editar/${carro.id}`}
                    >
                      Editar
                    </Link>
                    <Botao
                      aoClicar={() => apagarProduto(carro.id)}
                      className="ListaProdutos__botao-excluir"
                      titulo="Excluir"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Conteiner>
    </>
  );
};

export default ListaProdutos;
