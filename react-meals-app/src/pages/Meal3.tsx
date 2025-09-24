import IngredientList from "../components/IngredientList";
import MacroCard from "../components/MacroCard";

const Meal3 = () => {
  const ingredients = [
    "100 جرام صدور دجاج",
    "450 جرام أرز",
    "150 جرام سلطة",
    "معلقة زيت زيتون",
  ];

  const macros = {
    protein: 45,
    carbs: 130,
    fat: 20,
    calories: 900,
  };

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white transition-colors duration-500">
      {/* Motivational phrase */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-6 mt-2 animate-fadeIn animate-slideDown">
        <span className="block text-xl md:text-2xl font-bold text-yellow-400 drop-shadow-lg text-center tracking-wide">
          Power up for your workout! 🏋️‍♂️
        </span>
        <span className="block text-xl md:text-2xl font-bold text-rose-300 drop-shadow-lg text-center tracking-wide">
          Energy for performance
        </span>
      </div>

      {/* العنوان */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 drop-shadow-lg tracking-wide text-rose-400">
        🥘 Meal 3 (4 hours before workout)
      </h1>

      {/* الصورة + المكونات */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-3xl shadow-2xl p-4 md:p-8 border-2 bg-black/60 border-rose-800">
        <div className="flex justify-center">
          <img
            src={require("../assets/3.jpg")}
            alt="Meal 3"
            className="rounded-2xl shadow-xl border-4 w-full max-w-xs md:max-w-sm transition-transform duration-300 hover:scale-105 "
            style={{ borderColor: "#e11d48" }}
          />
        </div>
        <div className="bg-gray-900/70 border-gray-700 p-6 rounded-2xl shadow-lg border">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-rose-300 border-rose-400">
            Ingredients
          </h2>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>

      {/* الماكروز */}
      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 animate-scaleIn">
        <MacroCard name="Protein" value={macros.protein} unit="g" icon="🥩" />
        <MacroCard name="Carbs" value={macros.carbs} unit="g" icon="🍚" />
        <MacroCard name="Fat" value={macros.fat} unit="g" icon="🥑" />
        <MacroCard name="Calories" value={macros.calories} unit="kcal" icon="🔥" />
      </div>

      {/* مجموع السعرات */}
      <div className="text-center mt-14">
        <p className="text-3xl md:text-4xl font-semibold">
          Total Calories: {" "}
          <span className="text-rose-400" style={{ fontWeight: 800, fontSize: "2.5rem", textShadow: "0 2px 8px #0002" }}>
            {macros.calories}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Meal3;
