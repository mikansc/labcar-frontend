import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Menu from "./componentes/Menu";
import CadastrarProduto from "./paginas/CadastrarProduto";
import Cadastro from "./paginas/Cadastro";
import ListaProdutos from "./paginas/ListaProdutos";
import Login from "./paginas/Login";

const MenuOutlet = () => {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
};

const PaginaNaoEncontrada = () => {
  return <h1>Página não encontrada</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="produtos" element={<MenuOutlet />}>
          <Route index={true} element={<ListaProdutos />} />
          <Route path="novo" element={<CadastrarProduto />} />
          {/* 
            A rota abaixo é a rota de edição de produtos. Ela recebe um parâmetro
            chamado "id" na URL. Para acessar o valor deste parâmetro, usamos o
            hook "useParams" do React Router DOM.

            Exemplo: /produtos/editar/1
            O valor de "id" será 1. 
            (ver arquivo CadastrarProdutos/index.jsx para entender a aplicação)

            Importante: a prop modoEdicao é passada para o componente CadastrarProduto
            para que ele saiba se está no modo edição ou não.

            Você pode, opcionalmente, adicionar somente o nome da prop, sem o valor, já
            que, ao existir a prop, o valor inferido pelo React é "true".

            Exemplo: <Route path="editar/:id" element={<CadastrarProduto modoEdicao />} />
          */}
          <Route
            path="editar/:id"
            element={<CadastrarProduto modoEdicao={true} />}
          />
        </Route>
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
