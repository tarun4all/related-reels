import { RelatedProduct } from "./staticDB";

export const getRelatedProducts = async (tags = []) => {
  return tags.reduce((acc, tag) => {
    acc = [...acc, RelatedProduct[tag]];
    return acc;
  }, []);
};
