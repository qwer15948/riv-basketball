import FoulList from "../components/FoulList";
import Timeout from "../components/Timeout";
import { Input } from "@material-tailwind/react";
import Score from "../components/Score";
import ScoreMyTeam from "../components/ScoreMyTeam";
import { useState } from "react";

const MainPage = () => {
  const [myScore, setMyScore] = useState<number>(0);
  const [rivalScore, setRivalScore] = useState<number>(0);

  const handleMyScore = (point: number) => {
    setMyScore((prev) => prev + point);
  };

  const handleRivalScore = (point: number) => {
    setRivalScore((prev) => prev + point);
  };

  return (
    <div className="min-w-[425px] max-w-[425px] px-5">
      <div className="py-5">
        <div className="flex justify-between mb-2">
          <h3>RIV</h3>
          <Timeout />
        </div>
        <FoulList />
      </div>
      <div className="py-5">
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
        <FoulList />
      </div>
      <div className="py-5">
        <Score
          myScore={myScore}
          rivalScore={rivalScore}
          handleRivalScore={handleRivalScore}
        />
      </div>
      <div>
        <ScoreMyTeam handleMyScore={handleMyScore} />
      </div>
    </div>
  );
};

export default MainPage;
