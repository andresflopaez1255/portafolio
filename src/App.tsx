
import "./App.scss";
import CarouselProjects from "./components/CarouselProjects";
import ExperienceWork from "./components/ExperienceWork";
import NavBarComp from "./components/NavBar";
import Tecnologies from "./components/Tecnologies";
import TitleComponent from "./components/TitleComponent";
import AboutBanner from "./pages/AboutBanner";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false)

  return (

    <>
      <NavBarComp show={show} toggle={(state)=> setShow(state)} />
      <AboutBanner show={show}  />
      <main className="container">
        <TitleComponent
          marginTop="mt-15 mt-lg mt-sm mt-md"
          title="Sobre mi experiencia"
        />
        
        <ExperienceWork />
        
       
        <TitleComponent marginTop="mt-5" title="Tecnologias" />

        <Tecnologies />
        <TitleComponent marginTop="mt-5" title="Mis proyectos" />
      
        <CarouselProjects  />
       
      
        

       
      </main>

      <Footer/>
    </>
  );
}

export default App;
