import Footer from "./components/footer/footer"
import {Header, HeaderItem} from "./components/header/header"
import Home from "./components/home/home"
import Projetos from "./components/projetos/projetos"
import Skills from "./components/skills/skills"
import Sobre from "./components/sobre/sobre"
import listadeprojetos from "./components/projetos/assets/listadeprojetos.json"
import listadeskills from "./components/skills/assets/listadeskills.json"

function App() {
  const projetos = listadeprojetos
  const skills = listadeskills

  return(
    <>
      <Header>
        <HeaderItem name="home" />
        <HeaderItem name="projetos" />
        <HeaderItem name="sobre" />
        <HeaderItem name="contato" />  
      </Header>
      <hr className="border-1 border-amber-300"/>
      <Home/>
      <Projetos listaProjetos={projetos}/>
      <Sobre/>
      <Skills listaSkills={skills}/>
      <Footer/>
    </>
  )
}

export default App
