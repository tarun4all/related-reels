import { useEffect, useState } from "react";
import { RelatedProducts } from "../Products/Products";
import { getRecommendations } from "@/app/api/recommendations";
import { getRelatedProducts } from "@/app/api/products";
import { Recommendations } from "../Recommendations/Recommendations";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

export default function Reel({ url, account, tags, desc }) {
  const [products, setproducts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    Promise.all([getRecommendations(), getRelatedProducts(tags)]).then(
      ([r, p]) => {
        setRecommendations(r);
        setproducts(p);
      }
    );
  }, []);

  return (
    <div className="video">
      <video
        id="video-bg-elem"
        preload="auto"
        className="video__player"
        autoplay=""
        loop
        muted="muted"
        src={url}
        type="video/mp4"
      ></video>

      <div className="video__footer">
        <h3>@{account}</h3>
        <h5>{desc}</h5>
        <Recommendations recommendations={recommendations} />
      </div>

      <div className="video__sidebar">
        <FavoriteBorderIcon />
        <ChatBubbleOutlineIcon />
        <RelatedProducts products={products} />
      </div>
    </div>
  );
}
