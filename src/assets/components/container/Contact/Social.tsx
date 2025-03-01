import './Social.css'

interface SocialProps{
    icono: string,
    texto: string
}


const Social: React.FC<SocialProps> = (SocialProps)=>{
    return (
        <div className='social'>
            <i className={SocialProps.icono}></i>
            <p>{SocialProps.texto}</p>
        </div>
    )
}

export default Social