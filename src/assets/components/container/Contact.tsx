import Social from './Contact/Social.tsx';
import { FormEvent, useRef} from 'react';
import emailjs from '@emailjs/browser';


const Contact: React.FC = ()=>{
    const formRef = useRef<HTMLFormElement>(null);
    const sendEmail = async (e: FormEvent<HTMLFormElement>): Promise<void>=>{
        e.preventDefault();
        const form = formRef.current;
        if (!form) return; 

        emailjs.sendForm(
            'service_gwjzr7f',
            'template_x1dbqna',
            form,
            'Id0fdApRV60dgcj9-'
        )
        .then((result) => {
            console.log('Mensaje enviado:', result.text);
        })
        .catch((error) => {
            console.error('Error:', error.text);
        });

        form.reset(); 
    }
    return (
        <div className='contact' id="contact">
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
                <form ref={formRef} onSubmit={sendEmail} className="form-container">
                    <div className="form-group">
                        <input type="text" id="correoInput" name="correoInput" required/>
                        <label htmlFor="correoInput" id="correoLabel">Correo</label>
                    </div>
                    <div className="form-group">
                        <input type="text" id="asuntoInput" name="asuntoInput" required/>
                        <label htmlFor="asuntoInput" id="asuntoLabel">Asunto</label>
                    </div>
                    <div className="form-group">
                        <textarea id="mensajeInput" name="mensajeInput" required></textarea>
                        <label htmlFor="mensajeInput" id="mensajeLabel">Mensaje</label>
                    </div>
                    <button type="submit" className="btn-send" id="btn-send"><span>Enviar</span></button>
                </form>
            </div>
        </div>
    )
}

export default Contact