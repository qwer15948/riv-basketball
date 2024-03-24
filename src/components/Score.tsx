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
        className="w-[104px] h-[104px] text-4xl bg-tertiary"
        placeholder={undefined}
        ripple={false}
      >
        {myScore}
      </Button>
      <span className="text-8xl">:</span>
      <Button
        className="w-[104px] h-[104px] text-4xl bg-primary"
        placeholder={undefined}
        ripple={false}
      >
        {rivalScore}
      </Button>
      <div className="flex flex-col gap-1 ml-2">
        {[1, 2, 3].map((number, index) => (
          <Button
            key={index}
            variant="outlined"
            ripple={false}
            className="p-1 w-8 h-8 border-gray-400"
            placeholder={undefined}
            onClick={() => handleRivalScore(number)}
          >
            {number}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Score;
