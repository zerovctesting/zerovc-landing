
const ExecutionModel = () => {
  return (
    <section className="bg-dark text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 text-center">
          What We Do:
          <span className="text-neon-green"> Execution Model</span>
        </h2>
        
        <div className="grid gap-6">
          {executionPoints.map((point, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-neon-pink/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-neon-pink opacity-50">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-gray-400">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const executionPoints = [
  {
    title: "AI-Native Validation",
    description: "We leverage AI to validate ideas, automate execution, and optimize distribution with ruthless efficiency."
  },
  {
    title: "Asymmetric Opportunities",
    description: "We prioritize ideas that align with capital-efficient, high-upside bets in emerging markets."
  },
  {
    title: "Optimized for Liquidity",
    description: "Unlike traditional startups, we structure businesses for fast turnarounds and secondary market liquidity."
  },
  {
    title: "Data Flywheel",
    description: "Every experiment feeds into a compounding data flywheel, refining our ability to predict and exploit market inefficiencies."
  }
];

export default ExecutionModel;
