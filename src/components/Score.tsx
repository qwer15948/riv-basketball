import { Button } from "@material-tailwind/react";

interface ScoreProps {
  myScore: number;
  rivalScore: number;
  handleRivalScore: (point: number) => void;
}

const Score = ({ myScore, rivalScore, handleRivalScore }: ScoreProps) => {
  return (
    <div className="flex justify-center">
      <Button
        className="w-[104px] h-[104px] text-4xl bg-indigo-700"
        placeholder={undefined}
      >
        {myScore}
      </Button>
      <span className="text-8xl">:</span>
      <Button className="w-[104px] h-[104px] text-4xl" placeholder={undefined}>
        {rivalScore}
      </Button>
      <div className="flex flex-col gap-1 ml-2">
        <Button
          variant="outlined"
          ripple={false}
          className="p-1 w-8 h-8 border-gray-400"
          placeholder={undefined}
          onClick={() => handleRivalScore(1)}
        >
          1
        </Button>
        <Button
          variant="outlined"
          ripple={false}
          className="p-1 w-8 h-8 border-gray-400"
          placeholder={undefined}
          onClick={() => handleRivalScore(2)}
        >
          2
        </Button>
        <Button
          variant="outlined"
          ripple={false}
          className="p-1 w-8 h-8 border-gray-400"
          placeholder={undefined}
          onClick={() => handleRivalScore(3)}
        >
          3
        </Button>
      </div>
    </div>
  );
};

export default Score;
