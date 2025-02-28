import './Card.css'
interface CardProps{
    video: string,
    etiqueta: string,
    nivel: string,
    titulo: string,
    descripcion: string
}

const Card: React.FC<CardProps> = (CardProps)=>{
    return (
        <div className='card'>
            <div className="card-img-container">
                <video width="100%" autoPlay loop playsInline muted>
                    <source src={CardProps.video} type="video/mp4"/>
                </video>
            </div>
            <div className="card-data-container">
                <p className="portfolio-textoEtiqueta"> {CardProps.etiqueta} </p>
                <p className="portfolio-textoAdicional"> {CardProps.nivel} </p>
            </div>
            <h2>Título</h2>
            <div className="card-description-container">
                <p> {CardProps.descripcion}</p>
            </div>
            <div className="card-btn-container">
                <button className="btn-verMas"><span>Ver más</span></button>
            </div>
        </div>
    )
}

export default Card