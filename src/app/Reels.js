import { useContext, useEffect } from "react";
import { ReelsContext } from "./store/store";
import { getUserFeeds } from "./api/reels";

export function Reels() {
  const con = useContext(ReelsContext);

  useEffect(() => {
    console.log(con);
    getUserFeeds()
      .then((res) => {
        console.log(" >>>>>> ", res);
      })
      .catch((e) => console.log("Something Went Wrong"));
  }, [con]);

  return <></>;
}
