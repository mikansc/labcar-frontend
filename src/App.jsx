import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Menu from "./componentes/Menu";
import CadastrarProduto from "./paginas/CadastrarProduto";
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
        <Route path="produtos" element={<MenuOutlet />}>
          <Route index={true} element={<ListaProdutos />} />
          <Route path="novo" element={<CadastrarProduto />} />
        </Route>
        <Route path="*" element={<PaginaNaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
