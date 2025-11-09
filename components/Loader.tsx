"use client";

import PortfolioLoader from "./PortfolioLoader";

export default function Loader({ onFinish }: { onFinish: () => void }) {
  return <PortfolioLoader onFinish={onFinish} />;
}
