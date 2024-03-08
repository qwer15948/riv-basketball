import ScoreSelect from "./ScoreSelect";
import Result from "./Result";

interface ScoreMyTeamProps {
  handleMyScore: (point: number) => void;
}

const ScoreMyTeam = ({ handleMyScore }: ScoreMyTeamProps) => {
  const players = Array.from({ length: 12 }, (_, i) => `player${i + 1}`);

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-1 justify-items-center">
        {players.map((player, index) => (
          <ScoreSelect
            key={index}
            handleMyScore={handleMyScore}
            player={player} // 각 ScoreSelect 컴포넌트에게 player prop 전달
          />
        ))}
      </div>
      <hr className="my-2" />
      <h4>선수 통계</h4>
      <div className="grid grid-flow-col grid-rows-6 gap-4 justify-items-center py-4">
        {players.map((player, index) => (
          <Result key={index} player={player} />
        ))}
      </div>
    </div>
  );
};

export default ScoreMyTeam;
