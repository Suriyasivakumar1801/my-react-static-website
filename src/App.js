// App.js
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./scss/styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
