import { Route, Switch } from "react-router-dom";
import FavoritosPagina from "./pages/Favoritos";
import NovoMeetupPagina from "./pages/NovoMeetup";
import TodosMeetupsPagina from "./pages/TodosMeetups";

function App() {
  return (
    <div>
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
