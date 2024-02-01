import logo from '../../assets/shield.png';

function Logo() {
    return (
        <div className="logoContainer">
            <img src={logo} alt='Garden Guardian Logo' className="mainHeaderImg"/>
        </div>
    );
}

export default Logo;