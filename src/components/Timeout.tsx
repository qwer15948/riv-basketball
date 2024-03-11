import { Checkbox } from "@material-tailwind/react";
import { useState } from "react";

const Timeout = () => {
  const [foul, setFoul] = useState<boolean[]>([...Array(5)].map(() => false));

  const handleCheckboxChange = (index: number) => {
    const updatedFoul = [...foul];
    updatedFoul[index] = !updatedFoul[index];
    setFoul(updatedFoul);
  };

  return (
    <div className="flex gap-1">
      <h4>Time</h4>
      <Checkbox
        ripple={false}
        className="!h-6 !w-6 border-gray-900/20 bg-gray-900/10 hover:before:opacity-0"
        checked={foul[0]}
        containerProps={{ className: "!p-0" }}
        onChange={() => handleCheckboxChange(0)}
        crossOrigin={undefined}
      />
      <Checkbox
        ripple={false}
        className="!h-6 !w-6 border-gray-900/20 bg-gray-900/10 hover:before:opacity-0"
        checked={foul[1]}
        containerProps={{ className: "!p-0" }}
        onChange={() => handleCheckboxChange(1)}
        crossOrigin={undefined}
      />
      /
      <Checkbox
        ripple={false}
        className="!h-6 !w-6 border-gray-900/20 bg-gray-900/10 hover:before:opacity-0"
        checked={foul[2]}
        containerProps={{ className: "!p-0" }}
        onChange={() => handleCheckboxChange(2)}
        crossOrigin={undefined}
      />
      <Checkbox
        ripple={false}
        className="!h-6 !w-6 border-gray-900/20 bg-gray-900/10 hover:before:opacity-0"
        checked={foul[3]}
        containerProps={{ className: "!p-0" }}
        onChange={() => handleCheckboxChange(3)}
        crossOrigin={undefined}
      />
      <Checkbox
        ripple={false}
        className="!h-6 !w-6 border-gray-900/20 bg-gray-900/10 hover:before:opacity-0"
        checked={foul[4]}
        containerProps={{ className: "!p-0" }}
        onChange={() => handleCheckboxChange(4)}
        crossOrigin={undefined}
      />
    </div>
  );
};

export default Timeout;
