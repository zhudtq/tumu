import "./App.css";
import {
  Route,
  HashRouter as Router,
} from "react-router-dom";
import Home from "./pages/home/index.jsx";
import ConfigPage from "./pages/configPage/index.jsx";
import { ResultPage } from "./pages/resultPage/index.jsx";

function App() {
  return (
    <Router>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/config" exact>
          <ConfigPage />
        </Route>
        <Route path="/result" exact>
          <ResultPage />
        </Route>
    </Router>

  );
}

export default App;
