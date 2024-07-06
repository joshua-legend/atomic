import { useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";

const Body = () => {
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([{ contents: "축구하기" }, { contents: "유로2024 보기" }, { contents: "유튜브하기" }]);

  const addItem = () => {
    const todo = prompt("오늘 할일 추가") || "입력 오류";
    setTodoitems((prev) => {
      return [...prev, { contents: todo }];
    });
  };

  const deleteItem = (index: number) => {
    setTodoitems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      {todoitems.map((v, i) => (
        <TodoItem key={i} {...v} onDelete={() => deleteItem(i)} />
      ))}
      <AddButton handleClick={addItem} />
    </div>
  );
};
export default Body;
