import React from 'react';
import { Home } from "./pages/home";
import { SingerDetails } from "./pages/singer-details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/singer-details/:id" element={<SingerDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
