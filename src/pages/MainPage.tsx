import FoulList from "../components/FoulList";
import Timeout from "../components/Timeout";
import { Button, Input } from "@material-tailwind/react";
import Score from "../components/Score";
import ScoreMyTeam from "../components/ScoreMyTeam";
import { useState } from "react";
import Result from "../components/Result";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  foulsState,
  myScoreState,
  playerScoresState,
  rivalFoulsState,
  rivalNameState,
  rivalScoreState,
} from "../atoms/recoilAtoms";
import { getCurrentDate } from "../utils/getCurrentDate";
import FoulQuarter from "../components/FoulQuarter";

const MainPage = () => {
  const [myScore, setMyScore] = useRecoilState(myScoreState);
  const [rivalScore, setRivalScore] = useRecoilState(rivalScoreState);
  const [fouls, setFouls] = useRecoilState(foulsState);
  const [rivalFouls, setRivalFouls] = useRecoilState(rivalFoulsState);
  const [rivalName, setRivalName] = useRecoilState(rivalNameState);

  const [disabled, setDisabled] = useState<boolean>(false);

  const handleMyScore = (point: number) => {
    setMyScore((prev) => prev + point);
  };

  const handleRivalScore = (point: number) => {
    setRivalScore((prev) => prev + point);
  };

  const players = Array.from({ length: 12 }, (_, i) => `player${i + 1}`);

  const [openResult, setOpenResult] = useState<boolean>(true);

  const handleOpenResult = () => {
    setOpenResult((prev) => !prev);
  };

  // 전체 초기화
  const resetList = useResetRecoilState(playerScoresState);
  const useReset = () => {
    resetList();
    setMyScore(0);
    setRivalScore(0);
    setFouls([...Array(12)].map(() => 0));
    setRivalFouls([...Array(12)].map(() => 0));
    setRivalName("");
  };

  // 점수만 초기화
  const [playerScores, setPlayerScores] = useRecoilState(playerScoresState); // 기존의 playerScoresState를 사용합니다.

  const handleReset = () => {
    const newPlayerScores = { ...playerScores };
    Object.keys(newPlayerScores).forEach((playerKey) => {
      newPlayerScores[playerKey] = {
        name: newPlayerScores[playerKey].name,
        totalShots: [0, 0, 0],
        successfulShots: [0, 0, 0],
        rebounds: 0,
        turnovers: 0,
      };
    });
    setPlayerScores(newPlayerScores);
    setMyScore(0);
    setRivalScore(0);
    setFouls([...Array(12)].map(() => 0));
    setRivalFouls([...Array(12)].map(() => 0));
    setRivalName("");
  };

  return (
    <div className="min-w-[425px] max-w-[425px] md:min-w-[1200px] md:max-w-[1400px] px-5 md:grid md:grid-cols-3 md:gap-5">
      <div>
        <div className="mt-3">{getCurrentDate()}</div>
        {/* 우리팀 파울 기록 */}
        <div className="py-5 md:max-w-[425px]">
          <div className="flex justify-between mb-2">
            <h3>RIV</h3>
            <Timeout />
          </div>
          <FoulQuarter disabled={disabled} setDisabled={setDisabled} />
          <FoulList
            isMyTeam={true}
            fouls={fouls}
            setFouls={setFouls}
            disabled={disabled}
          />
        </div>
        {/* 상대팀 파울 기록 */}
        <div className="py-5 md:max-w-[425px]">
          <div className="flex justify-between mb-2 items-center">
            <div className="w-10">
              <Input
                variant="standard"
                label="상대팀"
                placeholder="Standard"
                crossOrigin={undefined}
                className="!text-base"
                value={rivalName}
                onChange={(e) => setRivalName(e.target.value)}
              />
            </div>
            <Timeout />
          </div>
          <FoulQuarter disabled={disabled} setDisabled={setDisabled} />
          <FoulList
            isMyTeam={false}
            fouls={rivalFouls}
            setFouls={setRivalFouls}
            disabled={disabled}
          />
        </div>
      </div>
      <div>
        <div className="py-5 md:max-w-[425px]">
          <Score
            myScore={myScore}
            rivalScore={rivalScore}
            handleRivalScore={handleRivalScore}
          />
        </div>
        <div className="md:max-w-[425px]">
          <ScoreMyTeam handleMyScore={handleMyScore} />
        </div>
        <Button
          className="w-full"
          onClick={handleOpenResult}
          placeholder={undefined}
        >
          결과 보기
        </Button>
        <div className="flex gap-1">
          <Button
            color="indigo"
            className="w-full my-2"
            onClick={handleReset}
            placeholder={undefined}
          >
            점수만 초기화
          </Button>
          <Button
            color="red"
            className="w-full my-2"
            onClick={useReset}
            placeholder={undefined}
          >
            모든 기록 초기화
          </Button>
        </div>

        <p className="text-sm text-gray-700 mb-5">
          - 버튼은 누른 즉시 카운트가 증가합니다.
          <br />- 결과 저장은 캡처로 부탁드립니다.
          <br />- 쿼터별 파울과 타임아웃 기록은 직접 초기화 해주세요. (ㅠㅠ)
        </p>
      </div>
      {openResult && (
        <div className="md:py-5">
          <h4>선수 통계</h4>
          <div className="grid grid-flow-col grid-rows-6 gap-4 justify-items-center py-4">
            {players.map((player, index) => (
              <Result key={index} player={player} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
