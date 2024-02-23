import Header from "./components/Home/Header";
import Sobre from "./components/Sobre/SobreNos";
import Equipe from "./components/Equipe/Equipe";
import Intolerancia from "./components/Intolerancias/Intolerancia";
import Alergias from "./components/Alergias/Alergias";

function App() {
  return (
    <>
      <Header/>
      
      <Alergias/>
      <Intolerancia/>
    </>
  );
}

export default App;
