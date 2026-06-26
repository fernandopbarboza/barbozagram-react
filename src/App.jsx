import { useState } from 'react';
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import React from "react";
import AuthPage from './pages/AuthPage/AuthPage';
import LayoutPage from './pages/LayoutPage/LayoutPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <LayoutPage>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </LayoutPage>
  )
}

export default App