import { ChangeEvent, FormEvent, useState } from "react";
import { addTodoProps } from "../Type";

const AddTodo = (Props: addTodoProps) => {
  const [name, setname] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setname(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo = { id: new Date().getTime().toString(), name };
    Props.addNewTodo(newTodo);
    setname("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title : </label>
        <input
          type="text"
          name="title"
          value={name}
          id="title"
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
