import { Route } from "react-router-dom";
import FavoritosPagina from "./pages/Favoritos";
import NovoMeetupPagina from "./pages/NovoMeetup";
import TodosMeetupsPagina from "./pages/TodosMeetups";

function App() {
  return (
    <div>
      <Route path={"/"}>
        <TodosMeetupsPagina />
      </Route>
      <Route path={"/novo-meetup"}>
        <NovoMeetupPagina />
      </Route>
      <Route path={"/favoritos"}>
        <FavoritosPagina />
      </Route>
    </div>
  );
}

export default App;
