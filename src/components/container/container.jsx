export default function Container(props){
    const className = props.className ? props.className : ""
    return(
        <div className={`p-4 w-full flex flex-col h-screen ${className}`}>
            {props.children}
        </div>
    )
}