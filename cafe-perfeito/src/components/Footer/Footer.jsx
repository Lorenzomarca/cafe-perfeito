import "./Footer.css";
import zap from "../../assets/image/whatsapp.png";
import ig from "../../assets/image/instagram.png";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                <div className="footer-brand">

                    <span className="footer-logo">
                        Café Perfeito
                    </span>

                    <p>
                        Café bom, perfeito para o seu momento perfeito!
                    </p>

                  
                    <div className="footer-redes">

                        <a
                            href="#"
                            className="rede"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={ig}
                                alt="Instagram"
                            />
                        </a>

                        <a
                            href="#"
                            className="rede"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={zap}
                                alt="WhatsApp"
                            />
                        </a>

                    </div>

                </div>


           
                <div className="footer-localizacao">

                    <h3>Onde estamos</h3>

                    <div className="localizacao-item">

                        <span className="localizacao-icon">
                            📍
                        </span>

                        <div>
                            <strong>Londres</strong>

                            <p>
                                Confira nossa localização
                                no mapa.
                            </p>

                            <a
                                href="https://www.google.com/maps/place/londres/data=!4m2!3m1!1s0x47d8a00baf21de75:0x52963a5addd52a99?sa=X&ved=1t:155783&ictx=111"
                                target="_blank"
                                rel="noreferrer"
                                className="map-link"
                            >
                                Ver no Google Maps →
                            </a>
                        </div>

                    </div>

                </div>


                <div className="footer-horario">

                    <h3>Horário</h3>

                    <p>Segunda a sexta</p>
                    <strong>08:00 — 20:00</strong>

                    <p>Sábado e domingo</p>
                    <strong>09:00 — 21:00</strong>

                </div>


             
                <div className="footer-mapa">

                    <h3>Encontre a gente</h3>

                    <div className="mapa">

                        <iframe
                            src="https://www.google.com/maps?q=Londres&output=embed"
                            loading="lazy"
                            title="Localização do Café Perfeito"
                        ></iframe>

                    </div>

                </div>

            </div>


            <div className="footer-bottom">

                <p>
                    © 2026 Café Perfeito
                </p>

                <span>
                    Feito por Lorenzo Guedes Marca
                </span>

            </div>

        </footer>
    );
}

export default Footer;