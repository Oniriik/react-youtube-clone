import { Routes, Route } from "react-router-dom";
import "./assets/styles/index.css"

import Home from "./vues/Home";
import NavBar from "./components/NavBar";
import Header from "./components/Header";


export default function App() {
  return (
    <div className="app">
      <Header/>
      <div className="content">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
      
    </div>
  )
}
