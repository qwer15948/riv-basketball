import { useRecoilValue } from "recoil";
import { playerScoresState } from "../atoms/recoilAtoms";

interface ResultProps {
  isDisabled?: boolean;
  player: string;
}

const Result = ({ isDisabled, player }: ResultProps) => {
  const playerScores = useRecoilValue(playerScoresState);
  const { totalShots, successfulShots, rebounds, turnovers } =
    playerScores[player];

  return (
    <div className="w-[180px] font-bold text-sm">
      <h6 className="text-gray-400 text-xs">{player}</h6>
      <div className="flex justify-between">
        <p className="font-normal">자유투:</p>
        <p>
          {successfulShots[0]} / {totalShots[0]} (
          {totalShots[0] === 0
            ? 0
            : ((successfulShots[0] / totalShots[0]) * 100).toFixed(2)}
          %)
        </p>
      </div>
      <div className="flex justify-between">
        <p className="font-normal">2점:</p>
        <p>
          {successfulShots[1]} / {totalShots[1]} (
          {totalShots[0] === 0
            ? 0
            : ((successfulShots[1] / totalShots[1]) * 100).toFixed(2)}
          %)
        </p>
      </div>
      <div className="flex justify-between">
        <p className="font-normal">3점:</p>
        <p>
          {successfulShots[2]} / {totalShots[2]} (
          {totalShots[0] === 0
            ? 0
            : ((successfulShots[2] / totalShots[2]) * 100).toFixed(2)}
          %)
        </p>
      </div>
      <div className="flex justify-between">
        <p className="font-normal">리바운드:</p>
        <p>{rebounds}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-normal">턴오버:</p>
        <p>{turnovers}</p>
      </div>
    </div>
  );
};

export default Result;
