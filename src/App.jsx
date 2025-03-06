import {Header, HeaderItem} from "./components/header/header"
import Home from "./components/home/home"

function App() {
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
    </>
  )
}

export default App
