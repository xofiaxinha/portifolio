import Container from "../container/container"
import React, {useState} from "react"
import "./assets/projetos.css"

function Projetos({listaProjetos}){
    const [hoveredIndex, setHoveredIndex] = useState(-1)
    return(
        <Container>
            <h1 className="text-amber-950 text-5xl font-bold uppercase lg:text-6xl my-2">Projetos</h1>
            <div className="projetos-container flex flex-wrap justify-center">
                {listaProjetos.map((projeto, index) => {
                    return(
                        <div 
                            key={index} 
                            className={`item w-70 h-80 bg-amber-500 flex items-end rounded-lg ${hoveredIndex !== null && hoveredIndex !== index ? 'squished' : ''}`}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(-1)}
                        >
                            <h3 className="text-amber-950 text-2xl font-bold m-4">{projeto.nome}</h3>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}

export {Projetos}