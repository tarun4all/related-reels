import { useContext, useEffect } from "react";
import { ReelsContext } from "./store/store";

export function Reels() {
  const con = useContext(ReelsContext);

  useEffect(() => {
    console.log(con);
  }, [con]);

  return <></>;
}
