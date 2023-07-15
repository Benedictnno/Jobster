import React, { useState } from "react";
import { Landing, Error, Register, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Profile,
  AllJobs,
  Stats,
  AddJobs,
  SharedLayout,
} from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="AllJobs" element={<AllJobs />} />
          <Route path="AddJobs" element={<AddJobs />} />
        </Route>
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
