import Container from "../container/container";

export default function Sobre(){
    return(
        <Container className="flex flex-col md:flex-row lg:p-20">
            <div className="img-section flex w-full justify-center">
                <div className="rounded-full w-60 lg:w-100 h-60 lg:h-100 bg-amber-700 m-4 col-span-1"></div>
            </div>
            <div className="sobre-section flex flex-col w-full justify-center">
                <h1 className="text-amber-950 text-5xl font-bold uppercase lg:text-6xl my-2">Maria Sofia</h1>
                <h3 className="text-amber-700 text-xl tracking-[.40em] lg:text-2xl my-2">front-end, UI/UX</h3>
                <p className="text-amber-900 text-lg my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Nullam nec turpis</p>
            </div>
        </Container>
    )

}