import React from "react";

const milestones = ["Idea", "Waitlist", "Revenue", "Spin-Off"];
const colors = ["#FF9900", "#FFD600", "#00CFFF", "#00FFC2"];

interface ProgressBarProps {
  currentStage: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStage }) => {
  const currentIndex = milestones.indexOf(currentStage);
  const percent = (currentIndex / (milestones.length - 1)) * 100;

  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs mb-1 text-zinc-300">
        {milestones.map((m, i) => (
          <span
            key={m}
            className={
              "font-mono transition-colors " +
              (i === currentIndex ? "text-white font-bold" : "")
            }
          >
            {m}
          </span>
        ))}
      </div>
      <div className="relative h-2 rounded-full" style={{ background: "linear-gradient(90deg, #FF9900 0%, #FFD600 25%, #00CFFF 75%, #00FFC2 100%)" }}>
        <div
          className="absolute top-1/2 -translate-y-1/2"
          style={{
            left: currentIndex === 0 ? 0 : `calc(${percent}% - 12px)`,
            transition: "left 0.3s cubic-bezier(0.4,0,0.2,1)",
            zIndex: 2,
          }}
        >
          <div
            className="w-5 h-5 rounded-full border-4 border-dark shadow-md"
            style={{ background: colors[currentIndex] }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
