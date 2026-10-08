import { useState } from "react";
import "./Header.css";
import logo from "../../assets/image/café-mtc.png";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="header">
            <div className="header-container">

                <div className="logo">
                    <img className="LogoS" src={logo} alt="Café Perfeito" />
                    <span>Café Perfeito</span>
                </div>

                <button
                    className={`menu-toggle ${menuAberto ? "ativo" : ""}`}
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-label="Abrir menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav ${menuAberto ? "menu-aberto" : ""}`}>
                    <a
                        className="btn-inicio"
                        href="#"
                        onClick={() => setMenuAberto(false)}
                    >
                        Início
                    </a>

                    <a
                        href="#catalogo"
                        onClick={() => setMenuAberto(false)}
                    >
                        Catálogo
                    </a>

                    <a
                        href="#sobre"
                        onClick={() => setMenuAberto(false)}
                    >
                        Sobre
                    </a>

                    <a
                        href="#contato"
                        onClick={() => setMenuAberto(false)}
                    >
                        Contato
                    </a>
                </nav>

            </div>
        </header>
    );
}

export default Header;