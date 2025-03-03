

interface NavProps {
    texto: string;
    href: string;
}


const Nav: React.FC<NavProps> = ({texto,href})=>{
    return (
        <div className = "nav">
            <a href={href}>{texto}</a>
        </div>
    )
}


export default Nav