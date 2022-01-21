import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './app.scss';

import HomePage from "../../pages/HomePage/HomePage";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";
import ModalWrapper from "../../hoc/ModalWrapper/ModalWrapper";


function App() {
  return (
    <div className="app">
        <ModalWrapper />
        <Routes>
            <Route path="/categories" element={
                <CategoriesPage />
            }/>
            <Route path="/" element={
                <HomePage/>
            }/>
        </Routes>
    </div>
  );
}

export default App;
