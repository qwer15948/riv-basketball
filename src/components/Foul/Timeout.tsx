import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { useState } from "react";

const Timeout = () => {
  const [time, setTime] = useState<boolean[]>([...Array(5)].map(() => false));

  const handleCheckboxChange = (index: number) => {
    const updatedTime = [...time];
    updatedTime[index] = !updatedTime[index];
    setTime(updatedTime);
  };

  return (
    <div className="flex gap-1">
      <h4>Time</h4>
      {time.map((isChecked, index) => (
        <React.Fragment key={index}>
          {index === 2 && "/"}
          <Checkbox
            ripple={false}
            className="!h-6 !w-6 border-gray-900/20 bg-gray-900/10 hover:before:opacity-0 checked:bg-primary"
            checked={isChecked}
            containerProps={{ className: "!p-0" }}
            onChange={() => handleCheckboxChange(index)}
            crossOrigin={undefined}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Timeout;
