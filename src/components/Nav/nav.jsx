const navbar = require ('../../assets/nav.png')

function Nav() {

    return (
        <div className='nav'>
            <div className='nav__navbar'><img src={navbar} alt="navbar" /></div>
            <div className='nav__copyrights'>
                Copiryght, SportSee 2020
            </div>
        </div>
    )
}

export default Nav