import '../../../App.css'
import Card from './Portfolio/Card.tsx'; 

const Portfolio: React.FC = ()=>{
    return (
        <div className='portfolio'>
            <div className="container">
                <div className="tituloPortfolio">
                    <h2>Portfolio</h2>
                </div>
                <div className="card-container">
                    <Card video='/videos/videoPrueba.mp4' etiqueta='Texto mediano' nivel='Fácil' titulo='hola' descripcion='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquid suscipit reiciendis, omnis repudiandae doloribus sunt consequuntur vel autem placeat pariatur'></Card>
                    <Card video='/videos/videoPrueba.mp4' etiqueta='Texto mediano' nivel='Fácil' titulo='hola' descripcion='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquid suscipit reiciendis, omnis repudiandae doloribus sunt consequuntur vel autem placeat pariatur'></Card>
                    <Card video='/videos/videoPrueba.mp4' etiqueta='Texto mediano' nivel='Fácil' titulo='hola' descripcion='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquid suscipit reiciendis, omnis repudiandae doloribus sunt consequuntur vel autem placeat pariatur'></Card>
                    <Card video='/videos/videoPrueba.mp4' etiqueta='Texto mediano' nivel='Fácil' titulo='hola' descripcion='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa aliquid suscipit reiciendis, omnis repudiandae doloribus sunt consequuntur vel autem placeat pariatur'></Card>
                </div>
            </div>
        </div>
    )
}

export default Portfolio