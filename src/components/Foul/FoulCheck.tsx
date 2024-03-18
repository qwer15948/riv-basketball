import { Checkbox } from "@material-tailwind/react";
import { useState } from "react";

const FoulCheck = () => {
  const [foul, setFoul] = useState<boolean[]>([...Array(4)].map(() => false));

  const handleCheckboxChange = (index: number) => {
    const updatedFoul = [...foul];
    updatedFoul[index] = !updatedFoul[index];
    setFoul(updatedFoul);
  };

  return (
    <div className="flex gap-1">
      {foul.map((isChecked, index) => (
        <Checkbox
          key={index}
          color="red"
          ripple={false}
          className="h-6 w-6 border-gray-900/20 bg-gray-900/10 hover:before:opacity-0 checked:bg-secondary"
          checked={isChecked}
          containerProps={{ className: "!p-0" }}
          onChange={() => handleCheckboxChange(index)}
          crossOrigin={undefined}
        />
      ))}
    </div>
  );
};

export default FoulCheck;
