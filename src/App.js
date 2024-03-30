import { Dashboard } from "@mui/icons-material";
import "./App.css";
import HomePage from "./assests/pages/HomePage";
import DashboardPage from "./assests/pages/DashboardPage";
import  {BrowserRouter,Route,Routes} from "react-router-dom";
import CoinPage from "./assests/pages/Coin";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/coin/:id" element={<CoinPage/>}/>
        {/* <Route path="/" element={<ComparePage/>}/>
        <Route path="/" element={<WatchlistPage/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
