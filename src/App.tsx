import './App.scss';
import CarouselProjects from './components/CarouselProjects';
import ExperienceWork from './components/ExperienceWork';
import NavBarComp from './components/NavBar';
import TitleComponent from './components/TitleComponent';
import AboutBanner from './pages/AboutBanner';
 

function App() {
   
   
  return (
    <>
    <NavBarComp/>
     <AboutBanner/>
      <main className="container">
      <TitleComponent marginTop='mt-15 mt-lg mt-sm mt-md' title="Sobre mi experiencia"/>
     <ExperienceWork/>
     <TitleComponent marginTop='mt-5' title="Mis proyectos"/>
     <CarouselProjects/>
      </main>
    </>
  )
}

export default App
