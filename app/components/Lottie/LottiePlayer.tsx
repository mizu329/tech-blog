"use client";

import Lottie from "react-lottie-player";
import animationData from "@/app/assets/Animation - 1735733179359.json";

export default function LottiePlayer() {
  return <Lottie 
  loop 
  animationData={animationData} 
  play 
  style={{ width: 200, height: 200 }} />;
}