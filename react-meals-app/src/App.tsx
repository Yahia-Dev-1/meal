import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Meal1 from "./pages/Meal1";
import Meal2 from "./pages/Meal2";
import Meal3 from "./pages/Meal3";
import Meal4 from "./pages/Meal4";
import Meal5 from "./pages/Meal5";
import Meal6 from "./pages/Meal6";
import Vitamins from "./pages/Vitamins";
import PushDay from "./pages/PushDay";
import PullDay from "./pages/PullDay";
import LegDay from "./pages/LegDay";
import Home from "./pages/Home";
import './index.css';


function App() {
  return (
    <Router>
      <Navbar />
      <div className="bg-black min-h-screen p-4 flex flex-col min-h-screen">
        <div className="flex-1">
          <Switch>
            <Route exact path="/Home" component={Home} />
            <Route path="/meal1" component={Meal1} />
            <Route path="/meal2" component={Meal2} />
            <Route path="/meal3" component={Meal3} />
            <Route path="/meal4" component={Meal4} />
            <Route path="/meal5" component={Meal5} />
            <Route path="/meal6" component={Meal6} />
            <Route path="/vitamins" component={Vitamins} />
            <Route path="/pushday" component={PushDay} />
            <Route path="/pullday" component={PullDay} />
            <Route path="/legday" component={LegDay} />
          </Switch>
        </div>
        <footer className="w-full text-center py-10 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 text-gray-300 text-2xl mt-8 rounded-t-2xl border-t-2 border-gray-800 shadow-inner animate-fadeIn font-bold tracking-wider">
          فريق تيمون وبومبا
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 font-semibold tracking-wide text-gray-200 text-base max-w-5xl mx-auto mt-4">
            <span>C. Ahmed Hassan</span>
            <span className="hidden md:inline">|</span>
            <span>C. Abdelrahman Mohamed</span>
            <span className="hidden md:inline">|</span>
            <span>C. Ziad Mohamed</span>
            <span className="hidden md:inline">|</span>
            <span>C. BILAL</span>
            <span className="hidden md:inline">|</span>
            <span>C. Joo</span>
            <span className="hidden md:inline">|</span>
            <span>C. Bilal</span>
            <span className="hidden md:inline">|</span>
            <span>C. Khaled Mohamed</span>
            <span className="hidden md:inline">|</span>
            <span>C. Mohamed Hagras</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;