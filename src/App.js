import { Dashboard } from "@mui/icons-material";
import "./App.css";
import HomePage from "./assests/pages/HomePage";
import DashboardPage from "./assests/pages/DashboardPage";
import  {BrowserRouter,Route,Routes} from "react-router-dom";
import CoinPage from "./assests/pages/Coin";
import ComparePage from "./assests/pages/Compare";
import WatchlistPage from "./assests/pages/WatchlistPage";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/coin/:id" element={<CoinPage/>}/>
        <Route path="/compare" element={<ComparePage/>}/>
        <Route path="/watchlist" element={<WatchlistPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
