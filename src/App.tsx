import "./App.css";
import "./res.css";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Loader from "./Components/Loader";
import Projects from "./Components/Projects";
// import Me from "./Components/Me";
import { useState, useEffect } from "react";
import Contact from "./Components/Contact";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      <Header />
      {/* <Me /> */}
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
