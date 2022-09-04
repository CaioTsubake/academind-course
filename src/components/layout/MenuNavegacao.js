import { Link } from "react-router-dom";

import classes from './MenuNavegacao.module.css'

function MenuNavegacao() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Meetups de React</div>
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
