import { useEffect, useState } from "react";
import { RelatedProducts } from "../Products/Products";
import { getRecommendations } from "@/app/api/recommendations";
import { getRelatedProducts } from "@/app/api/products";

export default function Reel({ url, id, tags }) {
  const [products, setproducts] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    Promise.all([getRecommendations(), getRelatedProducts(tags)]).then(
      (res) => {
        setRecommendations(res[0]);
        setproducts(res[1]);
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
    </div>
  );
}
