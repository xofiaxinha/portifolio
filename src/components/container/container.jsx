export default function Container(props){
    const className = props.className ? props.className : ""
    return(
        <div className={`p-8 w-full flex flex-col h-full ${className}`}>
            {props.children}
        </div>
    )
}