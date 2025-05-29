
import ProgressBar from "./ProgressBar";

const Projects = () => {
  // Split projects into rows of 3 for centering
  const rows = [];
  for (let i = 0; i < currentProjects.length; i += 3) {
    rows.push(currentProjects.slice(i, i + 3));
  }

  return (
    <section className="bg-dark text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 text-center">
          Projects & <span className="text-neon-pink">Focus Areas</span>
        </h2>
        
        <div className="mb-16">
          <h3 className="text-xl font-mono font-bold mb-8 text-neon-green">Current Projects</h3>
          <div className="flex flex-col gap-6">
            {rows.map((row, rowIdx) => (
              <div
                key={rowIdx}
                className={`grid md:grid-cols-3 gap-6 ${row.length < 3 ? "justify-center md:justify-center" : ""}`}
                style={row.length < 3 ? { justifyContent: "center" } : {}}
              >
                {row.map((project, index) => (
                  <a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-neon-green/50 transition-all group flex flex-col"
                  >
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-neon-green transition-colors">{project.title}</h4>
                    <ProgressBar currentStage={project.stage} />
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-mono font-bold mb-8 text-neon-green">Focus Areas</h3>
          <div className="grid gap-6">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-neon-green/50 transition-all"
              >
                <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                <p className="text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const currentProjects = [
  {
    title: "Sortino",
    url: "https://sortino.pro",
    description: "Hedge fund memo intelligence engine with AI-powered summarization, trend tracking, and strategy backtesting for investors of all levels.",
    stage: "Waitlist"
  },
  {
    title: "Neurolock",
    url: "https://www.neurolock.ai/",
    description: "Google Cache for what people say on the internet with AI-based cross-checking, fact-checking, and analytics issuing a trust rating.",
    stage: "Idea"
  },
  {
    title: "Cascade Video",
    url: "https://cascadevideo.xyz/",
    description: "AI-powered video workflow built specifically for business creators—not developers, enabling professional video content in minutes.",
    stage: "Waitlist"
  },
  {
    title: "Buildrunners",
    url: "https://buildrunners.com/#",
    description: "Dark store of construction materials that ensures just-in-time delivery reducing downtime and costs for professional contractors.",
    stage: "Waitlist"
  },
  {
    title: "IdealDeal",
    url: "https://idealdeal.cl",
    description: "Used electronics and sporting goods marketplace in South America with AI-optimized offline hubs for pricing, intake, and resale.",
    stage: "Revenue"
  }
];

const focusAreas = [
  {
    title: "Reinventing Proven Models",
    description: "Repurposing successful solutions and applying superior distribution to time-tested business models for instant dominance, similar to Rocket Internet—but faster.",
  },
  {
    title: "Underserved Niches",
    description: "We go where innovation lags: creator platforms, gambling, and unsexy high-margin industries like construction and logistics. Demand is there—execution isn't.",
  },
  {
    title: "Crypto & Sovereignty",
    description: "We build for the sovereign individual—tools for self-sovereign finance, privacy, and identity.",
  },
  {
    title: "Demographic Shifts",
    description: "Tapping into high-growth but neglected markets—single women, faith-based communities, the elderly.",
  },
];

export default Projects;
