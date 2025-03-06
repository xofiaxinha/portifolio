import Container from "../container/container"
import "./assets/skills.css"

export default function Skills(){
    const skills = 
        {
            "linguagens":"JavaScript, C, C++",
            "frameworks":"React, Node.js, Express",
            "databases":"MongoDB, MySQL",
            "ferramentas":"Git, GitHub, VSCode",
            "softSkills":"Comunicação, Trabalho em equipe, Proatividade"
        }
    return(
        <Container className="flex">
            <h1 className="text-amber-950 text-5xl font-bold uppercase lg:text-6xl my-2">Skills</h1>
            <div className="skill-container w-full p-10 justify-center">
                {Object.keys(skills).map((skill, index) => {
                    return(
                        <div 
                            key={index}
                            className="skill-item"
                        >
                            <h3 className="text-amber-950 text-2xl font-bold m-4">{skill}</h3>
                            <p className="text-amber-950 text-lg m-4">{skills[skill]}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}