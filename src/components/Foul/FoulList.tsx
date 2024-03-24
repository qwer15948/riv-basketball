import React from "react";
import InputNumber from "./InputNumber";
import InputNumberOtherTeam from "./InputNumberOtherTeam";

interface FoulListProps {
  isMyTeam: boolean;
  fouls: number[];
  setFouls: (fouls: number[]) => void;
  disabled: boolean;
}

const FoulList = ({ isMyTeam, fouls, setFouls, disabled }: FoulListProps) => {
  const players = Array.from({ length: 12 }, (_, i) => `player${i + 1}`);

  const handleIncrement = (index: number) => {
    const updatedFouls = [...fouls];
    if (updatedFouls[index] < 5) {
      updatedFouls[index]++;
      setFouls(updatedFouls);
    }
  };

  const handleDecrement = (index: number) => {
    const updatedFouls = [...fouls];
    if (updatedFouls[index] > 0) {
      updatedFouls[index]--;
      setFouls(updatedFouls);
    }
  };

  return (
    <div>
      <div className="grid grid-flow-col grid-rows-6 gap-1 justify-items-center">
        {isMyTeam
          ? players.map((player, i) => {
              return (
                <InputNumber
                  key={i}
                  value={fouls[i]}
                  isDisabled={!disabled}
                  onIncrement={() => handleIncrement(i)}
                  onDecrement={() => handleDecrement(i)}
                  player={player}
                />
              );
            })
          : players.map((player, i) => {
              return (
                <InputNumberOtherTeam
                  key={i}
                  value={fouls[i]}
                  isDisabled={!disabled}
                  onIncrement={() => handleIncrement(i)}
                  onDecrement={() => handleDecrement(i)}
                />
              );
            })}
      </div>
    </div>
  );
};

export default FoulList;
