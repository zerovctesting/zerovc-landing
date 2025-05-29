
const Features = () => {
  return (
    <section className="bg-dark text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 text-center">
          Hypercapitalist approach for the
          <span className="text-neon-pink"> hypercapitalist world</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-neon-green/50 transition-all">
              <h3 className="text-xl font-mono font-bold mb-6 text-neon-green">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Extreme Velocity",
    description: "We are an AI-native venture studio built for instant execution. No slow fundraising, no long product cycles—just rapid idea validation, automation, and ruthless distribution.",
  },
  {
    title: "Fast Liquidity",
    description: "Forget 10-year VC exits. We optimize for fast turnarounds, secondary liquidity, acquisitions, token models, and rapid fundraising.",
  },
  {
    title: "Data Flywheel",
    description: "Every launch feeds into a compounding data flywheel, refining our ability to predict, optimize, and exploit market inefficiencies at scale.",
  },
];

export default Features;
