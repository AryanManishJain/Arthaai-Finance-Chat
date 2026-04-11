import { useState, useRef, useEffect } from "react";
import ChatSection from "@/components/ChatSection";
import PPFCalculator from "@/components/PPFCalculator";
import Header from "@/components/Header";

export type Mode = "Investing" | "Tax";

export default function HomePage() {
  const [mode, setMode] = useState<Mode>("Investing");

  return (
    <div className="min-h-screen flex flex-col">
      <Header mode={mode} onModeChange={setMode} />
      <main className="flex-1 container mx-auto px-4 py-6 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <ChatSection mode={mode} />
          </div>
          <div className="lg:col-span-2">
            <PPFCalculator />
          </div>
        </div>
      </main>
    </div>
  );
}
