import FoulList from "../components/Foul/FoulList";
import Timeout from "../components/Foul/Timeout";
import { Button, Input } from "@material-tailwind/react";
import Score from "../components/Score";
import ScoreMyTeam from "../components/ScoreMyTeam";
import { useRef, useState } from "react";
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
import FoulQuarter from "../components/Foul/FoulQuarter";
import html2canvas from "html2canvas";

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

  const [openResult, setOpenResult] = useState<boolean>(false);

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
    window.location.reload();
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
    window.location.reload();
  };

  const resultRef = useRef<HTMLDivElement>(null);

  const saveAsImage = () => {
    if (!resultRef.current) return;

    const { scrollWidth, scrollHeight } = resultRef.current;
    resultRef.current.style.width = `${scrollWidth}px`;
    resultRef.current.style.height = `${scrollHeight}px`;

    html2canvas(resultRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "result_image.png";
      link.click();

      if (!resultRef.current) return;

      resultRef.current.style.width = "";
      resultRef.current.style.height = "";
    });
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
          선수 기록 확인하기
        </Button>
        <div className="flex gap-1">
          <Button
            color="indigo"
            className="w-full my-2 bg-primary"
            onClick={handleReset}
            placeholder={undefined}
          >
            초기화(우리팀 이름 유지)
          </Button>
          <Button
            className="w-full my-2 bg-secondary"
            onClick={useReset}
            placeholder={undefined}
          >
            초기화(모든 기록)
          </Button>
        </div>
      </div>
      {openResult && (
        <div>
          <div className="py-4" ref={resultRef}>
            <Result />
          </div>
          <Button
            onClick={saveAsImage}
            placeholder={undefined}
            className="bg-primary"
          >
            이미지로 저장
          </Button>
        </div>
      )}
    </div>
  );
};

export default MainPage;
