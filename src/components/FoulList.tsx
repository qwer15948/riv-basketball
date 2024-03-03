import { useState } from "react";
import InputNumber from "./InputNumber";
import FoulCheck from "./FoulCheck";
import { Switch } from "@material-tailwind/react";

const FoulList = (props: {}) => {
  const [fouls, setFouls] = useState<number[]>([...Array(12)].map(() => 0));
  const [disabled, setDisabled] = useState<boolean>(false);

  const handleIncrement = (index: number) => {
    const updatedFouls = [...fouls];
    if (updatedFouls[index] < 5) {
      updatedFouls[index]++;
      setFouls(updatedFouls);
    }
  };

  const handleDecrement = (index: number) => {
    const updatedFouls = [...fouls];
    if (updatedFouls[index] > 0) {
      updatedFouls[index]--;
      setFouls(updatedFouls);
    }
  };

  return (
    <div>
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
          <span>이름 변경</span>
          <Switch
            checked={disabled}
            onChange={() => setDisabled(!disabled)}
            crossOrigin={undefined}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 justify-items-center">
        {[...Array(12)].map((_, i) => {
          return (
            <InputNumber
              key={i}
              value={fouls[i]}
              isDisabled={!disabled}
              onIncrement={() => handleIncrement(i)}
              onDecrement={() => handleDecrement(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoulList;
