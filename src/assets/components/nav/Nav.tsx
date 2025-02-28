

interface NavProps {
    texto: string;
}


const Nav: React.FC<NavProps> = ({texto})=>{
    return (
        <div className = "nav">
            <a>{texto}</a>
        </div>
    )
}


export default Nav