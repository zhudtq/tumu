import "./App.css";
import {
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./pages/home/index.jsx";
import { ConfigPage } from "./pages/configPage/index.jsx";
import { ResultPage } from "./pages/resultPage/index.jsx";
import history from "./core/history";
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <Router history={history}>
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
