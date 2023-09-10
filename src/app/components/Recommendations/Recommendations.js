import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./recoommend.css";

export function Recommendations({ recommendations = [] }) {
  const [show, setShow] = useState(true);

  const RelatedVideos = () => {
    return (
      <>
        <ExpandMoreIcon />
        <section>
          <div className="recommendations__slider slide-top">
            {recommendations.map(({ thumbnail }) => (
              <img src={thumbnail} />
            ))}
          </div>
        </section>
      </>
    );
  };

  const ExpandButton = () => {
    return (
      <>
        <ExpandLessIcon />
        Related Videos
      </>
    );
  };

  return (
    <div className="recommendations" onClick={() => setShow(!show)}>
      {show ? <RelatedVideos /> : <ExpandButton />}
    </div>
  );
}
