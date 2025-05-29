
const Thesis = () => {
  return (
    <section className="bg-dark text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-12 text-center">
          Hypercapitalist approach for the
          <span className="text-neon-pink"> hypercapitalized world</span>
        </h2>
        
        <div className="grid gap-8">
          {thesisPoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:border-neon-green/50 transition-all"
            >
              <h3 className="text-lg font-semibold mb-3">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const thesisPoints = [
  {
    title: "Capital moves faster than ever before",
    description: "Execution speed has become the ultimate advantage in today's rapidly evolving market landscape."
  },
  {
    title: "Tech & AI lower the cost of value creation",
    description: "Large teams are obsolete. Small, highly optimized teams with AI leverage can scale infinitely."
  },
  {
    title: "Traditional VC model is broken",
    description: "Long exit timelines no longer make sense in an era where AI and crypto create faster liquidity opportunities."
  }
];

export default Thesis;
