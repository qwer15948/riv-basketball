import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Switch,
} from "@material-tailwind/react";
import FoulCheck from "./FoulCheck";

interface FoulQuarterProps {
  disabled: boolean;
  setDisabled: (disabled: boolean) => void;
}

const FoulQuarter = ({ disabled, setDisabled }: FoulQuarterProps) => {
  return (
    <div className="flex py-2 justify-between">
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
        <div className="flex">
          <span>이름 변경</span>
          <Popover>
            <PopoverHandler>
              <div className="border border-gray-500 rounded-full w-5 h-5 text-center self-center text-sm mx-1 text-gray-500">
                ?
              </div>
            </PopoverHandler>
            <PopoverContent placeholder={undefined}>
              버튼을 눌러 이름 변경 상태로 전환합니다.
            </PopoverContent>
          </Popover>
        </div>

        <Switch
          checked={disabled}
          onChange={() => setDisabled(!disabled)}
          crossOrigin={undefined}
        />
      </div>
    </div>
  );
};

export default FoulQuarter;
