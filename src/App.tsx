import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="Wrapper">
      <h1>Hi there! </h1>
      <p>Check this out!</p>
      <br />
      <Link to={"/home"}>
        <button className="todo-btn">ToDoList</button>
      </Link>
    </div>
  );
}

export default App;
