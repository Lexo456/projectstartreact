import Navigation from "./components/Navigation";
import Home from "./pages/Homepage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Apropos from "./pages/Apropos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/a-propos" exact component={Apropos}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
