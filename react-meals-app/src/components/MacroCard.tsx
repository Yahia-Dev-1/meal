import React from "react";

type MacroCardProps = {
  name: string;
  value: number | string;
  unit: string;
  icon?: React.ReactNode; // أيقونة اختيارية
};

const MacroCard = ({ name, value, unit, icon }: MacroCardProps) => {
  // نحدد لون مختلف حسب الماكرو
  const colorMap: Record<string, string> = {
    Protein: "text-red-400",
    Carbs: "text-blue-400",
    Fat: "text-yellow-400",
    Calories: "text-orange-400",
  };

  return (
    <div className="bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center transform hover:scale-105 hover:shadow-red-500/30 transition duration-300">
      {/* الأيقونة (لو موجودة) */}
      {icon && <div className="flex justify-center mb-4 text-4xl">{icon}</div>}

      {/* الاسم */}
      <h3 className={`text-xl font-bold mb-2 ${colorMap[name] || "text-red-400"}`}>
        {name}
      </h3>

      {/* القيمة + الوحدة */}
      <p className="text-3xl font-extrabold">
        {value}
        <span className="text-lg font-medium ml-1">{unit}</span>
      </p>
    </div>
  );
};

export default MacroCard;
