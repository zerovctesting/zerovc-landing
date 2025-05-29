
const Vision = () => {
  return (
    <section className="bg-dark text-white py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {visionStatements.map((statement, index) => (
          <div 
            key={index}
            className="text-3xl md:text-5xl font-bold text-center leading-tight"
          >
            <span className="text-gradient-primary">{statement}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const visionStatements = [
  "Dream bigger.",
  "Build smarter.",
  "Win faster.",
];

export default Vision;
