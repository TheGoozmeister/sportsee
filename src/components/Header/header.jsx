const logo = require ('../../assets/logo.png');


function Header () {

    return (
        <header>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <div className="menu__label">Accueil</div>
                <div className="menu__label">Profil</div>
                <div className="menu__label">Réglages</div>
                <div className="menu__label">Communauté</div>
            </div>
        </header>
    )
}


export default Header