function Header(props){
    return(
        <header className='text-amber-600 flex gap-4 justify-end p-4 cursor-default select-none w-full bg-white'>
            {props.children}
        </header>
    )
}
function HeaderItem(props){
    return(
        <div>
            <a href={`#${props.name}`} className="hover:text-orange-950 transition">{props.name}</a>
        </div>
    )
}

export { Header, HeaderItem }