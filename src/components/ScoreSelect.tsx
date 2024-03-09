import { Button, ButtonGroup } from "@material-tailwind/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { playerScoresState } from "../atoms/recoilAtoms";

interface InputNumberProps {
  handleMyScore: (point: number) => void;
  player: string;
}

const ScoreSelect = ({ handleMyScore, player }: InputNumberProps) => {
  const [playerScores, setPlayerScores] = useRecoilState(playerScoresState);
  const playerName = playerScores[player].name;

  const { totalShots, successfulShots } = playerScores[player] as {
    totalShots: number[];
    successfulShots: number[];
    rebounds: number;
    turnovers: number;
  };

  const [buttonStates, setButtonStates] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const handleButtonClick = (index: number) => {
    const updatedTotalShots = [...totalShots];
    updatedTotalShots[index]++;
    setPlayerScores((prevScores) => ({
      ...prevScores,
      [player]: {
        ...prevScores[player],
        totalShots: updatedTotalShots,
      },
    }));

    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = true;
    setButtonStates(updatedButtonStates);
  };

  const handleSuccessfulShots = (index: number) => {
    const updatedSuccessfulShots = [...successfulShots];
    updatedSuccessfulShots[index]++;
    setPlayerScores((prevScores) => ({
      ...prevScores,
      [player]: {
        ...prevScores[player],
        successfulShots: updatedSuccessfulShots,
      },
    }));

    handleMyScore(index + 1);

    handleCloseButton(index);
  };

  // 리바운드 추가 함수
  const handleRebound = () => {
    setPlayerScores((prevScores) => ({
      ...prevScores,
      [player]: {
        ...prevScores[player],
        rebounds: prevScores[player].rebounds + 1,
      },
    }));
  };

  // 턴오버 추가 함수
  const handleTurnover = () => {
    setPlayerScores((prevScores) => ({
      ...prevScores,
      [player]: {
        ...prevScores[player],
        turnovers: prevScores[player].turnovers + 1,
      },
    }));
  };

  const handleCloseButton = (index: number) => {
    const updatedButtonStates = [...buttonStates];
    updatedButtonStates[index] = false;
    setButtonStates(updatedButtonStates);
  };

  return (
    <div>
      <div
        className={buttonStates.every((state) => state === false) ? "mb-8" : ""}
      >
        <p className="text-sm text-gray-700">
          {playerName ? playerName : "선수"}
        </p>
        <ButtonGroup
          size="sm"
          placeholder={undefined}
          className="h-8 rounded-sm"
        >
          {[1, 2, 3].map((number, index) => (
            <Button
              key={index}
              className="p-1 w-9 bg-blue-gray-500"
              onClick={() => handleButtonClick(index)}
              placeholder={undefined}
            >
              {number}
            </Button>
          ))}
          <Button
            className="p-1 w-9 bg-blue-gray-500"
            onClick={() => handleRebound()}
            placeholder={undefined}
          >
            리
          </Button>
          <Button
            className="p-1 w-9 bg-blue-gray-500"
            onClick={() => handleTurnover()}
            placeholder={undefined}
          >
            T
          </Button>
        </ButtonGroup>
      </div>
      {buttonStates.map((state, index) => (
        <div key={index}>
          {state && (
            <div className="flex gap-1 my-1 justify-between">
              <p>
                {index + 1}점슛: {successfulShots[index]} / {totalShots[index]}
              </p>
              <ButtonGroup
                size="sm"
                placeholder={undefined}
                className="h-6 rounded-sm"
              >
                <Button
                  className="p-1 w-7 bg-blue-500"
                  onClick={() => handleSuccessfulShots(index)}
                  placeholder={undefined}
                >
                  O
                </Button>
                <Button
                  className="p-1 w-7 bg-gray-800"
                  onClick={() => handleCloseButton(index)}
                  placeholder={undefined}
                >
                  X
                </Button>
              </ButtonGroup>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ScoreSelect;
