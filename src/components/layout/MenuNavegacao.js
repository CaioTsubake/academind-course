import { Link } from "react-router-dom";

function MenuNavegacao() {
  return (
    <header>
      <div>Meetups de React</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Todos os Meetups</Link>
          </li>
          <li>
            <Link to={"/novo-meetup"}>Novo Meetup</Link>
          </li>
          <li>
            <Link to={"/favoritos"}>Favoritos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MenuNavegacao;
