import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CadastroCliente from "./pages/CadastroCliente/CadastroCliente";
import Usuarios from "./pages/Usuario/Usuarios";
import Login from './pages/Login/Login'
import CadastroUsuario from "./pages/CadastroUsuario/CadastroUsuario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} /> 
          <Route path="/Home" element={<Home />} />
          <Route path="/cadastrar/cliente" element={<CadastroCliente />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/cadastrar" element={<CadastroUsuario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
