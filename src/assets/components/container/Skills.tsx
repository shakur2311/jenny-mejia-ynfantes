import '../../../App.css'
import Skill from './Skills/Skill.tsx'; 

const Skills: React.FC = ()=>{
    return (
        <div className='skills' id="skills">
            <div className="container">
                <div className="tituloSkills">
                    <h2>Servicios y Habilidades</h2>
                </div>
                <div className="skills-container">
                    <Skill></Skill>
                    <Skill></Skill>
                    <Skill></Skill>
                    <Skill></Skill>
                    <Skill></Skill>
                    <Skill></Skill>
                    <Skill></Skill>
                    <Skill></Skill>
                </div>
            </div>
        </div>
    )
}

export default Skills