import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import FavoritosPagina from "./pages/Favoritos";
import NovoMeetupPagina from "./pages/NovoMeetup";
import TodosMeetupsPagina from "./pages/TodosMeetups";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
