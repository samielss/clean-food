//Importando Rect Routes
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importando os componentes do projeto
import Equipe from "./components/Equipe.js";
import Home from "./components/Home.js";
import Login from './components/Login.js';

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
