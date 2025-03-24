import IconButton from "../buttons/iconButton";
import Container from "../container/container";

const linkedin = "src/components/sobre/assets/icons8-linkedin-1.svg"
const github = "src/components/sobre/assets/icons8-github-1.svg"

export default function Sobre(){
    return(
        <Container id="sobre" className="flex flex-col md:flex-row lg:p-20">
            <div className="img-section flex w-full justify-center">
                <div className="rounded-full w-70 lg:w-120 h-70 lg:h-120 bg-[url(src/assets/img_5.png)] bg-cover bg-amber-700 m-4 col-span-1"></div>
            </div>
            <div className="sobre-section flex flex-col w-full justify-center">
                <h1 className="text-amber-950 text-5xl font-bold uppercase lg:text-6xl my-2">Maria Sofia</h1>
                <h3 className="text-amber-700 text-xl tracking-[.40em] lg:text-2xl my-2">front-end, UI/UX</h3>
                <p className="text-amber-900 text-lg my-2">Estudante de Ciência da Computação com um grande interesse por arte e design, 
                    vejo na programação uma nova forma de poder me expressar, além de poder transmitir informações para os usuários de forma
                    responsiva e amigável, sempre buscando prover a melhor experiência que eu posso entregar.</p>
                <p className="text-amber-900 text-lg my-2">Para além da programação, gosto muito de desenho digital e jogos (inclusive, você pode ver a minha sim aqui do lado).
                    Sempre estou buscando aprender coisas novas e me desafiar, e estou sempre aberta a novas oportunidades e projetos.
                </p>
                <div className="button-container flex w-full gap-4">
                    <IconButton icon={linkedin} link="https://www.linkedin.com/in/xofiaxinha/"/>
                    <IconButton icon={github} link="https://github.com/xofiaxinha/"/>
                </div>
            </div>
        </Container>
    )

}