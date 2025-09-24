import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Meal1 from "./pages/Meal1";
import Meal2 from "./pages/Meal2";
import Meal3 from "./pages/Meal3";
import Meal4 from "./pages/Meal4";
import Home from "./pages/Home";
import './index.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-black min-h-screen p-4">
        <Switch>
          <Route exact path="/Home" component={Home} />
          <Route path="/meal1" component={Meal1} />
          <Route path="/meal2" component={Meal2} />
          <Route path="/meal3" component={Meal3} />
          <Route path="/meal4" component={Meal4} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;