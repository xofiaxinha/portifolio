function Header(props){
    return(
        <header className='text-amber-600 flex gap-4 justify-end p-4 cursor-default select-none w-full'>
            {props.children}
        </header>
    )
}
function HeaderItem(props){
    return(
        <div>
            <p className="hover:text-orange-950">{props.name}</p>
        </div>
    )
}

export { Header, HeaderItem }