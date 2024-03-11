import FoulList from "../components/FoulList";
import Timeout from "../components/Timeout";
import { Button, Input } from "@material-tailwind/react";
import Score from "../components/Score";
import ScoreMyTeam from "../components/ScoreMyTeam";
import { useState } from "react";
import Result from "../components/Result";
import { useResetRecoilState } from "recoil";
import { playerScoresState } from "../atoms/recoilAtoms";
import { getCurrentDate } from "../utils/getCurrentDate";

const MainPage = () => {
  const [myScore, setMyScore] = useState<number>(0);
  const [rivalScore, setRivalScore] = useState<number>(0);

  const handleMyScore = (point: number) => {
    setMyScore((prev) => prev + point);
  };

  const handleRivalScore = (point: number) => {
    setRivalScore((prev) => prev + point);
  };

  const players = Array.from({ length: 12 }, (_, i) => `player${i + 1}`);

  const [openResult, setOpenResult] = useState<boolean>(false);

  const handleOpenResult = () => {
    setOpenResult((prev) => !prev);
  };

  const resetList = useResetRecoilState(playerScoresState);
  const useReset = () => {
    resetList();
  };

  return (
    <div className="min-w-[425px] max-w-[425px] md:min-w-[1200px] md:max-w-[1400px] px-5 md:grid md:grid-cols-3 md:gap-5">
      <div className="mt-3">{getCurrentDate()}</div>
      <div>
        {/* 우리팀 파울 기록 */}
        <div className="py-5 md:max-w-[425px]">
          <div className="flex justify-between mb-2">
            <h3>RIV</h3>
            <Timeout />
          </div>
          <FoulList isMyTeam={true} />
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
              />
            </div>
            <Timeout />
          </div>
          <FoulList isMyTeam={false} />
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
        <Button
          color="red"
          className="w-full my-2"
          onClick={useReset}
          placeholder={undefined}
        >
          기록 초기화
        </Button>
        <p className="text-sm text-gray-700 mb-5">
          - 버튼은 누른 즉시 카운트가 증가합니다. 슛에 맞추어 눌러주세요.
          <br />- 결과 저장은 캡처로 부탁드립니다.
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
