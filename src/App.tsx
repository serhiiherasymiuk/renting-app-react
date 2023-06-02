import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Review } from "./components/Review/Review";
import { Read } from "./components/Read/Read";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { ReviewDetails } from "./components/ReviewDetails/ReviewDetails";

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
          <Route path="/read" element={<Read />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
        </Routes>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
