import Social from './Contact/social.tsx';

const Contact: React.FC = ()=>{
    return (
        <div className='contact'>
            <div className="container">
                <div className="tituloContacto">
                    <h2>Contacto</h2>
                </div>
                <div className="social-container">
                    <Social icono="fa-brands fa-whatsapp" texto="+51 967 719 661"></Social>
                    <Social icono="fa-solid fa-envelope" texto="jenny@gmail.com"></Social>
                    <Social icono="fa-brands fa-instagram" texto="jennyeii_"></Social>
                    <Social icono="fa-brands fa-linkedin" texto="Jenny Mejia Ynfantes"></Social>
                </div>
                <div className="form-container">
                    <div className="form-group">
                        <label htmlFor="correoInput">Correo</label>
                        <input type="text" id="correoInput" name="correoInput" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="asuntoInput">Asunto</label>
                        <input type="text" id="asuntoInput" name="asuntoInput" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mensajeInput">Mensaje</label>
                        <textarea id="mensajeInput" name="mensajeInput"></textarea>
                    </div>
                    <button type="submit" className="btn-send" id="btn-send"><span>Enviar</span></button>
                </div>
            </div>
        </div>
    )
}

export default Contact