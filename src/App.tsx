import "./App.css";
import "./res.css";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Loader from "./Components/Loader";
import Projects from "./Components/Projects";
// import Me from "./Components/Me";
import { useState, useEffect } from "react";
import Contact from "./Components/Contact";
import Me from "./Components/Me";
import Footer from "./Components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <Loader isLoading={isLoading} />
  ) : (
    <>
      <Header />
      <Me />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
