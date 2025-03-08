import Container from "../container/container"
import "./assets/skills.css"

export default function Skills({listaSkills}){
    const skills = listaSkills
    return(
        <Container className="flex justify-center items-center">
            <h1 className="text-amber-950 text-5xl font-bold uppercase lg:text-6xl my-2">Skills</h1>
            <div className="skill-container w-full p-10 justify-center">
                {skills.map((skill, index) => {
                    return(
                        <div 
                            key={index}
                            className="skill-item"
                        >
                            <h3 className="text-amber-950 text-2xl font-bold m-4">{skill.nome}</h3>
                            <p className="text-amber-950 text-lg m-4">{skill.list}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}