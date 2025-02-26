

interface NavProps {
    texto: string;
}


const Nav: React.FC<NavProps> = ({texto})=>{
    return (
        <div className = "nav">
            {texto}
        </div>
    )
}


export default Nav