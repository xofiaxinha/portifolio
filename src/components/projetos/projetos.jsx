import Container from "../container/container"
import React, {useState} from "react"
import "./assets/projetos.css"
import TextButton from "../buttons/textButton"

export default function Projetos({listaProjetos}){
    function projectModal(projeto){
        return(
            <div className={"before bg-zinc-950/20 fixed z-1 top-0 left-0 w-full h-full flex items-center justify-center"}>
                <div className="h-150 w-200 bg-zinc-50 flex flex-col rounded-xl p-10">
                    <button onClick={() => setShowModal(false)} className="m-10 self-end text-xl bg-amber-600 hover:bg-amber-950 text-white h-10 w-10 rounded-lg flex justify-center items-center cursor-pointer">X</button>
                    <h1 className="text-amber-950 text-3xl font-bold m-4">{projeto.nome}</h1>
                    {<img src={projeto.imagem} alt="print do projeto" className="m-4 h-50"/>}
                    <p className="m-4">{projeto.descricao}</p>
                    <TextButton text="Ver projeto" link={projeto.github}/>
                </div>
            </div>
        )
    }
    const [hoveredIndex, setHoveredIndex] = useState(-1)
    const [clickedIndex, setClickedIndex] = useState(-1)
    const [showModal, setShowModal] = useState(false)
    return(
        <>
            {showModal ? projectModal(listaProjetos[clickedIndex]) : null}
            <Container className="flex items-center">
                <h1 className="text-amber-950 text-5xl font-bold uppercase lg:text-6xl my-2">Projetos</h1>
                <div className="projetos-container w-full p-10 flex flex-wrap justify-center">
                    {listaProjetos.map((projeto, index) => {
                        return(
                            <div 
                                key={index} 
                                className={`projetos-item h-50 bg-amber-500 flex items-end rounded-lg cursor-pointer ${hoveredIndex !== null && hoveredIndex !== index ? 'squished' : ''}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(-1)}
                                onClick={() => {setClickedIndex(index); setShowModal(true)}}
                            >
                                <h3 className="text-amber-950 text-2xl font-bold m-4">{projeto.nome}</h3>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </>
    )
}