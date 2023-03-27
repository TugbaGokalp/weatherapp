
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import İletisim from "./iletişim/İletisim"

import Footer from "../components/footer/Footer";



import Weather from "./HavaDurumu";
import Topbuttons from "./topButtons/TopButtons";

const AppRouter = () => {
  const [currentUser, setCurrentUser] = useState(
    sessionStorage.getItem("user")
  );
  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Topbuttons className="text-dark"/>
      <Routes>
        <Route path="/" element={<Weather />} />
        
        <Route path="/iletisim" element={<İletisim/>}/>
        
     
          <Route path="/weather" element={<Weather/>} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
