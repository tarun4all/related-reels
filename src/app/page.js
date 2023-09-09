"use client";

import Reels from "./components/Reels/Reels";
import StoreWrapper from "./store/store";

export default function Home() {
  return (
    <StoreWrapper>
      <Reels />
    </StoreWrapper>
  );
}
