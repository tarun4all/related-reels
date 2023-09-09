"use client";

import { Reels } from "./Reels";
import StoreWrapper from "./store/store";

export default function Home() {
  return (
    <StoreWrapper>
      <Reels />
    </StoreWrapper>
  );
}
