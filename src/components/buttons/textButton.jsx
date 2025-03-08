export default function TextButton({text, link}){
    return(
        <a href={link} target="_blank" rel="noreferrer" className="h-10 w-fit bg-amber-700 hover:bg-amber-950 rounded-xl flex items-center justify-center px-4 px-2 object-cover text-white text-xl m-4 cursor-pointer select-none">            {text}
        </a>
    )
}