import { BrowserRouter, Route, Routes } from "react-router";
import Administrador from "./components/pages/Administrador";
import DetalleProducto from "./components/pages/DetalleProducto";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import CardProducto from "./components/pages/producto/CardProducto";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import Login from "./components/pages/Login";
import { useState } from "react";

function App() {
  // no es necesario envolver al sessionSotrage en el JSON.parse porque el "false" es un valor valido
  // en el JSON. ose no es necesario convertirlo de nuevo
  const usuarioLogeado = sessionStorage.getItem("userKey") || false;
  const [userAdmin, setUserAdmin] = useState(usuarioLogeado);
  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route
              path="/detalle-producto"
              element={<DetalleProducto />}
            ></Route>
            <Route
              path="/login"
              element={<Login setUserAdmin={setUserAdmin} />}
            ></Route>
            <Route path="/administrador" element={<Administrador />}></Route>
            <Route
              path="/administrador/crear"
              element={<FormularioProducto />}
            ></Route>
            <Route
              path="/administrador/editar"
              element={<FormularioProducto />}
            ></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
