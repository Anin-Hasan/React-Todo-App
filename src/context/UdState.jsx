import UdContext from "./UdContex";
import React, { useEffect } from "react";

const UdState = ({ tasks, setNewTasks, setLists, setEditTodo, children }) => {
  function deleteItem(id) {
    setLists(" ");
    setNewTasks((prevState) => prevState.filter((t) => t.id !== id));
  }

  function toggleTask(id) {
    setNewTasks((prevState) =>
      prevState.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  }

  function handleEdit(id) {
    const findTask = tasks.find((task) => task.id === id);
    setEditTodo(findTask);
  }

  return (
    <UdContext.Provider
      value={{
        deleteItem: deleteItem,
        toggleTask: toggleTask,
        handleEdit: handleEdit,
      }}
    >
      {children}
    </UdContext.Provider>
  );
};

export default UdState;
