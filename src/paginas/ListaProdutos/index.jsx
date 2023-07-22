import { Link } from "react-router-dom";
import Conteiner from "../../componentes/Conteiner";

import "./listaProdutos.css";

const ListaProdutos = () => {
  return (
    <>
      <Conteiner>
        <Link to="/">Voltar</Link>
        <h1 className="ListaProdutos__titulo">Página de Lista de Produtos</h1>
        <div className="ListaProdutos__conteudo">
          <table className="ListaProdutos__tabela">
            <thead className="ListaProdutos__tabela-head">
              <tr className="ListaProdutos__tabela-row">
                <th className="ListaProdutos__tabela-head-cell">Nome</th>
                <th className="ListaProdutos__tabela-head-cell">Modelo</th>
                <th className="ListaProdutos__tabela-head-cell">Marca</th>
                <th className="ListaProdutos__tabela-head-cell">Ano</th>
                <th className="ListaProdutos__tabela-head-cell">Ação</th>
              </tr>
            </thead>
            <tbody className="ListaProdutos__tabela-body">
              <tr className="ListaProdutos__tabela-row">
                <td className="ListaProdutos__tabela-cell">Uno</td>
                <td className="ListaProdutos__tabela-cell">1.0</td>
                <td className="ListaProdutos__tabela-cell">Fiat</td>
                <td className="ListaProdutos__tabela-cell">2010</td>
                <td className="ListaProdutos__tabela-cell">
                  <Link className="ListaProdutos__botao-editar" to="editar/1">
                    Editar
                  </Link>
                  <button className="ListaProdutos__botao-excluir">
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Conteiner>
    </>
  );
};

export default ListaProdutos;
