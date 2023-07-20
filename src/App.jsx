import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cadastro from "./paginas/Cadastro";
import ListaProdutos from "./paginas/ListaProdutos";
import Login from "./paginas/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/lista-produtos" element={<ListaProdutos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
