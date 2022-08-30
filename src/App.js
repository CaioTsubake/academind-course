import { Route, Switch } from "react-router-dom";
import MenuNavegacao from "./components/layout/MenuNavegacao";
import FavoritosPagina from "./pages/Favoritos";
import NovoMeetupPagina from "./pages/NovoMeetup";
import TodosMeetupsPagina from "./pages/TodosMeetups";

function App() {
  return (
    <div>
      <MenuNavegacao />

      <Switch>
        <Route path={"/"} exact>
          <TodosMeetupsPagina />
        </Route>
        <Route path={"/novo-meetup"}>
          <NovoMeetupPagina />
        </Route>
        <Route path={"/favoritos"}>
          <FavoritosPagina />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
