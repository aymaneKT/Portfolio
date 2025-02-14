import "./App.css";
import "./res.css";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Loader from "./Components/Loader";
import Projects from "./Components/Projects";
import { useState, useEffect } from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { DeviceContextProvider } from "./context/DeviceContext";
import Model from "./Components/Model";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  // return isLoading ? (
  //   <Loader isLoading={isLoading} />
  // ) : (
  return (
    <>
      <DeviceContextProvider>
        <Header />
        {/* <Me /> */}
        <Model />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </DeviceContextProvider>
    </>
  );
}

export default App;
