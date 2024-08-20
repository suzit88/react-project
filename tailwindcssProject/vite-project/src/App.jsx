import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import Footer from "./Component/footer";
import Navbar from "./Component/navbar";
import DetailPage from "./Pages/DetailPage";

function App(){
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" Component={HomePage} />
        <Route path="/about" Component={AboutPage} />
        <Route path="/detail" Component={DetailPage} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
    
  );
};

export default App;
