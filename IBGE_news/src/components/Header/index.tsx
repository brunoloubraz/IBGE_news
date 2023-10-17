import trybeLogo  from "../../images/trybe_logo.svg"
import "../Header/index.css"

function Header() {

  return (
    <header>
        <img src={ trybeLogo } alt="Logo Trybe"/>
        <div className="title">
          <h1>Trybe News</h1>
        </div>
    </header>
  )
}

export default Header;