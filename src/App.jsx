import { useEffect, useState } from "react";
import CustomForm from "./components/CustomForm";
import Display from "./components/Display";
import UdState from "./context/UdState";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [lists, setLists] = useState("");
  const [tasks, setNewTasks] = useLocalStorage("react-todo.tasks", []);
  const [editTodo, setEditTodo] = useState("");

  function addItem(item) {
    setNewTasks((prevState) => [...prevState, item]);
    //console.log(tasks);
  }

  function updateTodo(task, id, checked) {
    const newTodo = tasks.map((t) => (t.id === id ? { task, id, checked } : t));
    setNewTasks(newTodo);
    setEditTodo("");
  }
  useEffect(() => {
    if (editTodo) {
      setLists(editTodo.task);
    } else {
      setLists("");
    }
  }, [setLists, editTodo]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!lists) return;

    if (!editTodo) {
      addItem({
        id: Date.now(),
        checked: false,
        task: lists,
      });
      setLists("");
    } else {
      updateTodo(lists, editTodo.id, editTodo.checked);
    }

  }

  return (
    <>
      <UdState
        setNewTasks={setNewTasks}
        tasks={tasks}
        setLists={setLists}
        setEditTodo={setEditTodo}
      >
        <main className="flex justify-center items-center flex-col mx-2  mt-20">
          <h1 className="text-3xl font-bold drop-shadow-md">My Tasks List</h1>
          <CustomForm
            lists={lists}
            setLists={setLists}
            handleSubmit={handleSubmit}
          ></CustomForm>
          <Display
            tasks={tasks}
          ></Display>
        </main>
      </UdState>
    </>
  );
}

export default App;
