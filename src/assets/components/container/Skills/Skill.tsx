import './Skill.css'

const Skill: React.FC = ()=>{
    return (
        <div className='skill'>
            <div className="skill-front">
                <i className="fa-solid fa-list-check"></i>
                <h2>Gestión de equipos</h2>
            </div>
            <div className="skill-back">
                <h2>Gestión de equipos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit consectetur omnis voluptatum iste eius obcaecati quos, ipsa at repudia.</p>
            </div>
        </div>
    )
}

export default Skill