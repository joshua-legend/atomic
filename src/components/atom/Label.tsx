import { TEXTSTYLE } from "../../styles/textStyle";

export type LabelPorps = {
  isChecked?: boolean;
  contents?: string;
};

const Label = ({ isChecked = false, contents = "내용 없음" }: LabelPorps) => {
  return <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>{contents}</span>;
};
export default Label;
