import ScoreSelect from "./ScoreSelect";

interface ScoreMyTeamProps {
  handleMyScore: (point: number) => void;
}

const ScoreMyTeam = ({ handleMyScore }: ScoreMyTeamProps) => {
  const players = Array.from({ length: 12 }, (_, i) => `player${i + 1}`);

  return (
    <div className="">
      <div className="grid grid-flow-col grid-rows-6 gap-1 justify-items-center">
        {players.map((player, index) => (
          <ScoreSelect
            key={index}
            handleMyScore={handleMyScore}
            player={player} // 각 ScoreSelect 컴포넌트에게 player prop 전달
          />
        ))}
      </div>
      <hr className="my-2" />
    </div>
  );
};

export default ScoreMyTeam;
