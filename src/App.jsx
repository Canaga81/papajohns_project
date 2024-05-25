import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Kampaniyalar from "./pages/Kampaniyalar";
import Papadias from "./pages/Papadias";
import Pizza from "./pages/Pizza";
import Qelyanalti from "./pages/Qelyanalti";
import Salat from "./pages/Salat";
import Pasta from "./pages/Pasta";
import Icki from "./pages/Icki";
import Desert from "./pages/Desert";
import Sous from "./pages/Sous";
import Sidebar from "./components/Sidebar/Sidebar";
import Promo from "./components/Promo/Promo";
import PapaBonus from "./pages/PapaBonus";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";

function App() {

  return (

    <motion.div
    initial={{
      opacity: 0,
      marginTop: -60,
      marginLeft: -100,
    }}
    animate={{
      opacity: 1,
      marginTop: 0,
      marginLeft: 0,
    }}
    transition={{
      duration: 1.5
    }}
    >

      <BrowserRouter>

        <ScrollToTop />

        <Header />

        <Promo />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kampaniyalar" element={<Kampaniyalar />} />
          <Route path="/papadias" element={<Papadias />} />
          <Route path="/pizza" element={<Pizza />} />
          <Route path="/qelyanalti" element={<Qelyanalti />} />
          <Route path="/salat" element={<Salat />} />
          <Route path="/pasta" element={<Pasta />} />
          <Route path="/icki" element={<Icki />} />
          <Route path="/desert" element={<Desert />} />
          <Route path="/sous" element={<Sous />} />
          <Route path="/papaBonus" element={<PapaBonus />} />
        </Routes>

        <Sidebar />

      </BrowserRouter>
      
    </motion.div>

  );

}

export default App;