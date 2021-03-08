import "./App.css";
import { Switch, Route, BrowserRouter as Router, withRouter } from "react-router-dom";
import { Home } from "./pages/home/index";
import { ConfigPage } from "./pages/configPage/index";
import { ResultPage } from "./pages/resultPage/index";
import { NavBar } from "./components/navBar/index";

function App() {
  return (
        <div>
        <Router>
        <Route route="/" exact component={ Home } />
        <Route route="/config" component={ ConfigPage } />
        <Route route="/result" component={ ResultPage } />
        </Router>
        </div>
  );
}

export default App;
