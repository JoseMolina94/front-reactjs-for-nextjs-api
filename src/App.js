import React from 'react';
import { Home } from "./pages/home";
import { SingerDetails } from "./pages/singer-details";
import { CreateSinger } from "./pages/create-singer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/singer-details/:id" element={<SingerDetails />} />
        <Route path="/create-singer" element={<CreateSinger />} />
      </Routes>
    </BrowserRouter>
  )
}
