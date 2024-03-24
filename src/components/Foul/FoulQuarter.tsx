import { Switch } from "@material-tailwind/react";
import FoulCheck from "./FoulCheck";

interface FoulQuarterProps {
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
}

const FoulQuarter = ({ disabled, setDisabled }: FoulQuarterProps) => {
  return (
    <div className="flex py-2 justify-between items-end">
      <div className="grid grid-cols-2 gap-1 justify-center w-2/3 font-semibold text-center">
        <div className="flex gap-1">
          <span className="w-3">1</span>
          <FoulCheck />
        </div>
        <div className="flex gap-1">
          <span className="w-3">2</span>
          <FoulCheck />
        </div>
        <div className="flex gap-1">
          <span className="w-3">3</span>
          <FoulCheck />
        </div>
        <div className="flex gap-1">
          <span className="w-3">4</span>
          <FoulCheck />
        </div>
      </div>
      <div className="flex flex-col items-end gap-1">
        <div className="flex text-sm gap-2">
          <span className=" text-primary">이름 변경</span>
          <Switch
            checked={disabled}
            onChange={() => setDisabled(!disabled)}
            crossOrigin={undefined}
            className="checked:bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default FoulQuarter;
