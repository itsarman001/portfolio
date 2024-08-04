import React from "react";
import { Container, Navbar } from "./components";
import { Home, About, Projects } from "./pages";
const App = () => {
  return (
    <>
      <Navbar />
      <Container className="text-center font-semibold inter-tight flex items-center justify-center primary-bg">
        <Home className="h-screen w-full" />
      </Container>

      <Container className="text-center font-semibold inter-tight primary-bg">
        <About />
      </Container>

      {/* <Container className="text-center font-semibold inter-tight primary-bg">
        <Projects />
      </Container> */}
    </>
  );
};

export default App;
