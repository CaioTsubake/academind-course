import Todo  from "./components/Todo";

function App() {
  return (
    <div>
      <h1>Meus Todos</h1>
      <Todo text="Aprender React"/>
      <Todo text='Dominar React'/>
      <Todo text='Assistir todo o curso de React'/>
    </div>
  );
}

export default App;
