import "./Header.css";
import logo from "../../assets/image/café-mtc.png";
function Header() {
  return (
  <header className="header">
    <div className="header-container">
        <div className="logo">
          <img className="LogoS"src={logo} alt="logo" />
         <span>Café Perfeito</span>
        </div>
         <nav className="nav">
            <a className="btn-inicio" href="#">Início</a>
            <a href="#">Catálogo</a>
            <a href="#">Sobre</a>
            <a href="#">Contato</a>
         </nav>
    </div>
  </header>
  );
}
export default Header