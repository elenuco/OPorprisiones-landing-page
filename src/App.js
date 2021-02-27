import "./styles.css";
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route />
        </Switch>
      </Router>
    </>
  );
}
