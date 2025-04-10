import Container from "../container/container";


export default function Home(){
    return(
        <Container id="home" className="justify-center items-center my-4">
            <h1 className="text-amber-950 text-5xl font-bold uppercase lg:text-6xl my-2">Maria Sofia</h1>
            <h3 className="text-amber-700 text-xl tracking-[.40em] lg:text-2xl my-2">front-end, UI/UX</h3>
            <div className="rounded-full w-70 lg:w-120 h-70 lg:h-120 bg-[url(https://i.imgur.com/GF7VcC7.png)] bg-cover bg-amber-700 m-4">
            </div>
        </Container>
    )
}