import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Review } from "./components/Review/Review";

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
