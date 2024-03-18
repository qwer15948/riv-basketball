import { Typography } from "@material-tailwind/react";
import { useRecoilValue } from "recoil";
import { foulsState, playerScoresState } from "../atoms/recoilAtoms";
const Result = () => {
  const playerScores = useRecoilValue(playerScoresState);
  const playerFouls = useRecoilValue(foulsState);

  return (
    <table className="w-full min-w-max table-auto text-left">
      <thead>
        <tr>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
              placeholder={undefined}
            >
              선수
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
              placeholder={undefined}
            >
              자유투
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
              placeholder={undefined}
            >
              2점
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
              placeholder={undefined}
            >
              3점
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
              placeholder={undefined}
            >
              득점
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
              placeholder={undefined}
            >
              F
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
              placeholder={undefined}
            >
              R
            </Typography>
          </th>
          <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
              placeholder={undefined}
            >
              T
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(playerScores).map((player, index) => {
          const { name, totalShots, successfulShots, rebounds, turnovers } =
            playerScores[player];
          const fouls = playerFouls[index];
          return (
            <tr key={index} className="text-center">
              <td className="p-4 border-b border-blue-gray-50">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  placeholder={undefined}
                >
                  {name}
                </Typography>
              </td>
              <td className={totalShots[0] === 0 ? "p-4" : "p-4 bg-gray-100"}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  placeholder={undefined}
                >
                  {successfulShots[0]} / {totalShots[0]} (
                  {totalShots[0] === 0
                    ? 0
                    : ((successfulShots[0] / totalShots[0]) * 100).toFixed(2)}
                  %)
                </Typography>
              </td>
              <td className={totalShots[1] === 0 ? "p-4" : "p-4 bg-gray-100"}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  placeholder={undefined}
                >
                  {successfulShots[1]} / {totalShots[1]} (
                  {totalShots[1] === 0
                    ? 0
                    : ((successfulShots[1] / totalShots[1]) * 100).toFixed(2)}
                  %)
                </Typography>
              </td>
              <td className={totalShots[2] === 0 ? "p-4" : "p-4 bg-gray-100"}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  placeholder={undefined}
                >
                  {successfulShots[2]} / {totalShots[2]} (
                  {totalShots[2] === 0
                    ? 0
                    : ((successfulShots[2] / totalShots[2]) * 100).toFixed(2)}
                  %)
                </Typography>
              </td>
              <td className={fouls === 0 ? "p-4" : "p-4 bg-gray-100"}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  placeholder={undefined}
                >
                  {successfulShots[0] * 1 +
                    successfulShots[1] * 2 +
                    successfulShots[2] * 3}
                </Typography>
              </td>
              <td className={fouls === 0 ? "p-4" : "p-4 bg-gray-100"}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  placeholder={undefined}
                >
                  {fouls}
                </Typography>
              </td>
              <td className={rebounds === 0 ? "p-4" : "p-4 bg-gray-100"}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  placeholder={undefined}
                >
                  {rebounds}
                </Typography>
              </td>
              <td className={turnovers === 0 ? "p-4" : "p-4 bg-gray-100"}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                  placeholder={undefined}
                >
                  {turnovers}
                </Typography>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
