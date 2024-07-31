import React from "react";
import { Container, Navbar } from "./components";
import { Home, About, Projects } from "./pages";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />

      <Container className="text-center font-semibold inter-tight flex items-center justify-center primary-bg">
        <Home className=" h-screen w-full" />
      </Container>
    </div>
  );
};

export default App;
