import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import FilterBar from "./components/FilterBar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
function App() {
  return (
    <Router>
      <div className="pb-52">
        <Navbar />
        <div className="pt-16">
          <Sidebar />
          <FilterBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/shop">
              <Shop />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
