import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import DetailPage from './Pages/DetailPage';

function AppRoutes() {
  return (
    <div>
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:id" element={<DetailPage />} />
     
    </Routes>
    
  </div>
  )
}

export default AppRoutes