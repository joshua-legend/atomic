import { IoTrashOutline } from "react-icons/io5";
import { alarm } from "../../utils/util";

export type TrashIconProps = {
  onDelete?: () => void;
};

const TrashIcon = ({ onDelete = alarm }: TrashIconProps) => {
  return <IoTrashOutline onClick={onDelete} />;
};
export default TrashIcon;
