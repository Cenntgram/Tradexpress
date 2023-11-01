import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import IndiBus from "./pages/IndiBus";
import Login from "./pages/Login";
import Almostin from "./pages/AlmostIn";
import Error404 from "./pages/Error404";
import BuySell from "./pages/BuySell";
import Navbarr from "./components/Navbarr";
import { useEffect, useState } from "react";

function App() {
  const [allCoins, setAllCoins] = useState([]);

  useEffect(() =>{
    let getCoins = async ()=> {
      let res = await fetch(
        "https://api.coinlore.net/api/tickers/?start=0&limit=5"
      );
      let finalCoins = await res.json();
      console.log(finalCoins.data);
      setAllCoins(finalCoins.data)
    };
    getCoins();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbarr/>
        <Routes>
          <Route path="/" element={<LandingPage newCoins={allCoins} />} />
          <Route path="indi-bus" element={<IndiBus />} />
          <Route path="buy-sell" element={<BuySell />} />
          <Route path="login" element={<Login />} />
          <Route path="almost-in" element={<Almostin />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
