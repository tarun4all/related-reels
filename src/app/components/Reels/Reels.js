import { useContext, useEffect } from "react";
import { ReelsContext } from "../../store/store";
import { getUserFeeds } from "../../api/reels";
import Reel from "./Reel";
import "./reels.css";

export default function Reels() {
  const { reels, updateVideos } = useContext(ReelsContext);

  useEffect(() => {
    getUserFeeds()
      .then(updateVideos)
      .catch((e) => console.log("Something Went Wrong"));
  }, []);

  return (
    <div className="reels">
      <div className="reels_reel">
        {reels.map((reel) => (
          <Reel {...reel} />
        ))}
      </div>
    </div>
  );
}
