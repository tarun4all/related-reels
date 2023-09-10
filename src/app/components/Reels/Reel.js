import { useEffect, useState } from "react";
import { RelatedProducts } from "../Products/Products";
import { getRecommendations } from "@/app/api/recommendations";
import { getRelatedProducts } from "@/app/api/products";
import { Recommendations } from "../Recommendations/Recommendations";

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
      <RelatedProducts products={products} />

      <div className="videoFooter">
        <h3>@{account}</h3>
        <h5>{desc}</h5>
        <Recommendations recommendations={recommendations} />
      </div>
    </div>
  );
}
