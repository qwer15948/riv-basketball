import { useState } from "react";
import ScoreSelect from "./ScoreSelect";
import { Switch } from "@material-tailwind/react";
import Result from "./Result";

interface ScoreMyTeamProps {
  handleMyScore: (point: number) => void;
}

const ScoreMyTeam = ({ handleMyScore }: ScoreMyTeamProps) => {
  const [disabled, setDisabled] = useState(false);
  const players = Array.from({ length: 12 }, (_, i) => `player${i + 1}`);

  return (
    <div className="">
      <div className="flex justify-end items-center gap-3 pb-1">
        <span>이름 변경</span>
        <Switch
          checked={disabled}
          onChange={() => setDisabled(!disabled)}
          crossOrigin={undefined}
        />
      </div>
      <div className="grid grid-cols-2 gap-1 justify-items-center">
        {players.map((player, index) => (
          <ScoreSelect
            key={index}
            isDisabled={!disabled}
            handleMyScore={handleMyScore}
            player={player} // 각 ScoreSelect 컴포넌트에게 player prop 전달
          />
        ))}
      </div>
      <hr className="my-2" />
      <h4>선수 통계</h4>
      <div className="grid grid-flow-col grid-rows-6 gap-4 justify-items-center py-4">
        {players.map((player, index) => (
          <Result key={index} isDisabled={!disabled} player={player} />
        ))}
      </div>
    </div>
  );
};

export default ScoreMyTeam;
