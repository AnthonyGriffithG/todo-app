import "./styles/general.css";
import Todo from "./components/todo.jsx";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Todo />
      <ToastContainer
        autoClose={1500}
        theme="dark"
        position="bottom-center"
        transition={Zoom}
      />
    </>
  );
}

export default App;
