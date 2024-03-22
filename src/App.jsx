//Importando Rect Routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importando os componentes do projeto
import Equipe from "./components/Equipe.jsx";
import Home from "./components/Home.jsx";
import Login from './components/Login.jsx';
import NewAccount from './components/NewAccount.jsx';

// Criando as rotas do projeto
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"equipe",
    element:<Equipe/>
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"newAccount",
    element:<NewAccount/>
  }
])


// App JS
function App() {

  return (
    <>
      {/* Importando as rotas */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
