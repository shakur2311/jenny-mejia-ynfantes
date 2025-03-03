import '../../../App.css'
import Tool from '../../components/container/About/Tool.tsx';

const About: React.FC = ()=>{
    return (
        <div className='about' id="about">
            <div className="container">
                <div className="about-left-side">
                    <h2>Jenny Mejia Ynfantes texto texto</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sapien faucibus turpis, vitae tincidunt est enim a justo. Nulla facilisi. Nullam et dignissim risus, at vulputate neque.</p>
                    <button className="btn-cta">Hablemos</button>
                </div>
                <div className="about-right-side">
                    <img src="../../../images/jenny2.png" alt="Jenny" />
                </div>
            </div>
            <div className="about-tools">
                    <div className="container">
                        <Tool icon="fa-solid fa-file-excel" text="Excel"></Tool>
                        <Tool icon="" text="Duolingo"></Tool>
                        <Tool icon="" text="Instagram"></Tool>
                        <Tool icon="" text="Microsoft"></Tool>
                        <Tool icon="" text="Linkedin"></Tool>
                    </div>
            </div>
        </div>
    )
}

export default About