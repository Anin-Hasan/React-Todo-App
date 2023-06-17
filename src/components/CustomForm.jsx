import React, { useRef } from "react";

const CustomForm = ({ lists, setLists, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between">
      <input
        className="border-2 px-4 my-8 ml-7 mx-3 w-52 outline-none h-10 shadow-md focus:shadow-custom duration-300"
        autoFocus
        ref={inputRef}
        type="text"
        value={lists}
        onChange={(e) => setLists(e.target.value)}
        placeholder="Write something..."
        required
      />
      <button
        className="bg-sky-600 h-10 w-20 rounded-md text-white font-semibold shadow-custom hover:scale-105 duration-300"
        type="submit"
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        ADD
      </button>
    </form>
  );
};

export default CustomForm;
