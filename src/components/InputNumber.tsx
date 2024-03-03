import { Button, ButtonGroup, Input } from "@material-tailwind/react";

interface InputNumberProps {
  value: number;
  isDisabled?: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
}

const InputNumber = ({
  value,
  isDisabled,
  onIncrement,
  onDecrement,
}: InputNumberProps) => {
  return (
    <div className="flex gap-1">
      <Input
        className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
        containerProps={{ className: "!min-w-0 !w-full !p-0 h-8" }}
        crossOrigin={undefined}
        label="선수"
        labelProps={{
          className: "hidden",
        }}
        disabled={isDisabled}
      />
      <ButtonGroup size="sm" placeholder={undefined} className="h-8 rounded-sm">
        <Button
          className="p-1 w-5 bg-blue-gray-500"
          onClick={onDecrement}
          placeholder={undefined}
        >
          -
        </Button>
        <Button
          className={`font-extrabold px-2 py-1 bg-blue-gray-50 text-sm ${
            value === 4 ? "bg-red-800 !text-white" : "text-black"
          }
          ${value === 5 ? "bg-black text-white" : "text-black"}`}
          disabled
          placeholder={undefined}
        >
          {value}
        </Button>
        <Button
          className="p-1 w-5 bg-blue-gray-500"
          onClick={onIncrement}
          placeholder={undefined}
        >
          +
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default InputNumber;
