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
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-red-950 text-gray-100 p-4 md:p-8 flex flex-col items-center">
      {/* العنوان */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-red-500 mb-12 drop-shadow-lg tracking-wide">
        🥘 الوجبة الثالثة (قبل التمرين بـ4 ساعات)
      </h1>

      {/* الصورة + المكونات */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-black/60 rounded-3xl shadow-2xl p-4 md:p-8 border border-red-900">
        <div className="flex justify-center">
          <img
            src={require("../assets/3.jpg")}
            alt="الوجبة الثالثة"
            className="rounded-2xl shadow-xl border-4 border-red-700 w-full max-w-xs md:max-w-sm transition-transform duration-300 hover:scale-105 hover:shadow-red-700/50"
          />
        </div>
        <div className="bg-gray-900/70 p-6 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-red-400 mb-4 border-b border-red-500 pb-2">
            المكونات
          </h2>
          <IngredientList ingredients={ingredients} />
        </div>
      </div>

      {/* الماكروز */}
      <div className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
        <MacroCard name="Protein" value={macros.protein} unit="g" icon="🥩" />
        <MacroCard name="Carbs" value={macros.carbs} unit="g" icon="🍚" />
        <MacroCard name="Fat" value={macros.fat} unit="g" icon="🥑" />
        <MacroCard name="Calories" value={macros.calories} unit="kcal" icon="🔥" />
      </div>

      {/* مجموع السعرات */}
      <div className="text-center mt-14">
        <p className="text-3xl md:text-4xl font-semibold">
          مجموع السعرات:{" "}
          <span className="text-red-500 font-extrabold text-5xl drop-shadow-md">
            {macros.calories}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Meal3;
