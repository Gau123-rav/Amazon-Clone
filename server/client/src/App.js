import "./App.css";
import Navbar from "./components/header/Navbar";
import Newnav from "./components/newnavbar/Newnav";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";
import Sign_in from "./components/signup_signin/Sign_in";
import Sign_up from "./components/signup_signin/Sign_up";
import { Routes, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Buynow from "./components/buynow/Buynow";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);

  return (
    <>
      {data ? (
        <>
          <Navbar />
          <Newnav />
          <Routes>
            <Route path="/" element={<Maincomp />}></Route>
            <Route path="/login" element={<Sign_in />}></Route>
            <Route path="/register" element={<Sign_up />}></Route>
            <Route path="/getproductsone/:id" element={<Cart />}></Route>
            <Route path="/buynow" element={<Buynow />}></Route>
          </Routes>
          <Footer />
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2>Loading...</h2>
        </div>
      )}
    </>
  );
}

export default App;
