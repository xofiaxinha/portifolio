import {Header, HeaderItem} from "./components/header/header"
import Home from "./components/home/home"
import { Projetos } from "./components/projetos/projetos"

function App() {
  const items = [
    {
        nome: "home"
    },
    {
        nome: "projetos"
    },
    {
        nome: "sobre"
    },
    {
      nome: "sobre"
    },
    {
      nome: "sobre"
    },
    {
        nome: "contato"
    }
]
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
      <Projetos listaProjetos={items}/>
    </>
  )
}

export default App
