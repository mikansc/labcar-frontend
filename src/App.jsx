import Botao from "./components/Botao";
import Input from "./components/Input";

const App = () => {
  return (
    <>
      <Botao titulo="Título do botão" cor="green" />
      <Input
        label="Teste"
        id="123"
        onChange={(e) => console.log(e.target.value)}
      />
    </>
  );
};

export default App;
