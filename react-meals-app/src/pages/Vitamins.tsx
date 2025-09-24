
const vitamins = [
  {
    name: "Limitless Co Q10",
    image: require("../assets/Limitless Co Q10.jpg"),
    timing: "بعد الوجبة الأولى",
    benefits: [
      "يساعد علي انتاج الطاقة",
      "تحسين وظيفة القلب",
      "تحسين الأداء الرياضي"
    ]
  },
  {
    name: "C Retard",
    image: require("../assets/Cretard.jpg"),
    timing: "بعد الوجبة الأولى بساعتين",
    benefits: [
      "دعم المناعة",
      "تقليل التعب والإرهاق"
    ]
  },
  {
    name: "Osteocare",
    image: require("../assets/Osteocare.jpg"),
    timing: "بعد الوجبة السادسة",
    benefits: [
      "لصحة العظام والمفاصل",
      "لدعم العضلات والأعصاب",
      "منع هشاشة العظام"
    ]
  }
];

const Vitamins = () => {
  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white transition-colors duration-500">
      {/* Motivational phrase */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-6 mt-2 animate-fadeIn animate-slideDown">
        <span className="block text-xl md:text-2xl font-bold text-yellow-400 drop-shadow-lg text-center tracking-wide">
          Supplements for a stronger you! 💊
        </span>
        <span className="block text-xl md:text-2xl font-bold text-rose-300 drop-shadow-lg text-center tracking-wide">
          Health is wealth
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold mb-12 drop-shadow-lg text-center tracking-tight text-blue-400">
        💊 Vitamins & Supplements
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-6xl">
        {vitamins.map((vit, idx) => (
          <div
            key={idx}
            className={"rounded-3xl shadow-xl p-6 flex flex-col items-center border-2 transition-all duration-300 animate-scaleIn bg-gray-900/80 border-blue-700"}
          >
            <img
              src={vit.image}
              alt={vit.name}
              className="w-40 h-40 object-contain rounded-xl border-4 mb-4 bg-white"
              style={{ borderColor: "#60a5fa" }}
            />
            <h2 className="text-2xl font-bold text-blue-300 mb-2">{vit.name}</h2>
            <p className="text-lg text-blue-200 mb-3">{vit.timing}</p>
            <ul className="text-gray-100 text-right list-disc pr-6">
              {vit.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vitamins;
