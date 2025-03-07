export default function IconButton({icon, link}){
    return(
        <a href={link} target="_blank" rel="noreferrer" className="w-10 h-10 bg-amber-700 hover:bg-amber-950 rounded-lg flex items-center justify-center p-1 object-cover text-white">
            <img src={icon} alt="icon" className="w-20"/>
        </a>
    )
}