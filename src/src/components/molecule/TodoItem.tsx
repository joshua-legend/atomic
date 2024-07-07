import { useState } from "react";
import RoundCheckBox from "../atom/RoundCheckBox";
import TrashIcon from "../atom/TrashIcon";
import CheckedLabel from "../atom/CheckedLabel";

export type TodoItemProps = {
  id: number;
  contents: string;
  onDelete?: () => void;
};

const TodoItem = ({ contents, onDelete }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const handleCheck = () => setIsChecked((prev) => !prev);

  const obj = {
    roundCheckBox: {
      isChecked,
      handleCheck,
    },
    checkedLabel: {
      isChecked,
      contents,
    },
    trashIcon: {
      onDelete,
    },
  };

  return (
    <div className="flex items-center gap-5">
      <RoundCheckBox {...obj.roundCheckBox} />
      <CheckedLabel {...obj.checkedLabel} />
      {isChecked && <TrashIcon {...obj.trashIcon} />}
    </div>
  );
};

export default TodoItem;