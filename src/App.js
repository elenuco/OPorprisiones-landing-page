import "./styles.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <body id="e11_1">
      <div clas="row" name="nav-bar">
        <div class="col-md-3"></div>
        <div id="e42_4" class="col-md-9"></div>
      </div>
      <div class="container-fluid">
        <form class="d-flex">
          <img src="/assets/check_box.svg" alt="Oporprisiones logo" id="logo" />
          <span id="e15_77">Oporprisiones</span>
          <span id="e16_7">Registrate</span>
          <span id="e16_6">Iniciar</span>
        </form>
      </div>
      <div name="presentacion">
        <span id="e16_57">Aprueba con nuestro método</span>
        <span id="e16_58">
          Unete al Cuerpo de Ayudantes de Instituciones Penitenciarias
        </span>
        <img
          src="/assets/Analytics process_Monochromatic.svg"
          alt="personas analizando datos"
          id="icono_1"
        />
      </div>
      <div name="Que-es">
        <img
          src="/assets/Information flow_Monochromatic.svg"
          alt="persona trabajando"
          id="icono_2"
        />
      </div>
    </body>
  );
}
