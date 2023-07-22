import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <nav className="Menu__nav">
      <ul className="Menu__nav-list">
        <li className="Menu__nav-list-item">
          <Link to="/lista-produtos">Lista de Produtos</Link>
        </li>
        <li className="Menu__nav-list-item">
          <Link to="/cadastro">Cadastrar produto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
