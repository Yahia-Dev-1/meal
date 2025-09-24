import IngredientList from "../components/IngredientList";
import MacroCard from "../components/MacroCard";

const PushDay = () => {
  const exercises = [
    {
      name: "Flat Bench Press (Chest)",
      sets: "3 × 8–12",
      video: require("../assets/Flat Bench Press.mp4")
    },
    {
      name: "Dumbbell Incline bench",
      sets: "3 × 8–12",
      video: require("../assets/Dumbbell Incline bench.mp4")
    },
    {
      name: "Machine Chest Fly",
      sets: "3 × 12–15",
      video: require("../assets/Machine Chest Fly.mp4")
    },
    {
      name: "Cable Cross (Chest)",
      sets: "3 × 12–15",
      video: require("../assets/Cable Cross .mp4")
    },
    {
      name: "Lateral Raises",
      sets: "3 × 12–15",
      video: require("../assets/Lateral Raises.mp4")
    },
    {
      name: "Dumbbell Shoulder Press",
      sets: "3 × 8–12",
      video: require("../assets/Dumbbell Shoulder Press.mp4")
    },
    {
      name: "Rope Tricep Overhead Extension",
      sets: "3 × 10–15",
      video: require("../assets/Rope Tricep Overhead Extension.mp4")
    },
    {
      name: "Rope Tricep Pushdown",
      sets: "3 × 10–15",
      video: require("../assets/Rope Tricep Pushdown.mp4")
    },
  ];

  const summary = {
    focus: "Chest, Shoulders, Triceps",
    sets: 18,
    duration: "60-75 min"
  };

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white transition-colors duration-500">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-6 mt-2 animate-fadeIn animate-slideDown">
        <span className="block text-xl md:text-2xl font-bold text-yellow-400 drop-shadow-lg text-center tracking-wide">
          Push yourself to new limits! 💪
        </span>
        <span className="block text-xl md:text-2xl font-bold text-rose-300 drop-shadow-lg text-center tracking-wide">
          Chest, Shoulders & Triceps
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 drop-shadow-lg tracking-wide text-rose-400">
        Push Day
      </h1>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center rounded-3xl shadow-2xl p-4 md:p-8 border-2 bg-black/60 border-rose-800">
        <div className="bg-gray-900/70 border-gray-700 p-6 rounded-2xl shadow-lg border w-full">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2 text-rose-300 border-rose-400">
            Exercises
          </h2>
          <div className="space-y-8">
            {exercises.map((ex, idx) => (
              <div key={ex.name} className="mb-4">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-yellow-300">{idx + 1}.</span>
                  <span className="text-xl font-semibold">{ex.name}</span>
                  <span className="text-base font-medium text-blue-300">{ex.sets}</span>
                </div>
                {ex.video ? (
                  <video
                    src={ex.video}
                    controls
                    className="rounded-xl border-2 border-blue-400 shadow-lg w-full max-w-md bg-black"
                    style={{ minHeight: 180 }}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <MacroCard name="Focus" value={summary.focus} unit="" icon="🏋️" />
          <MacroCard name="Total Sets" value={summary.sets} unit="sets" icon="🔢" />
          <MacroCard name="Duration" value={summary.duration} unit="" icon="⏱️" />
        </div>
      </div>
    </div>
  );
};

export default PushDay;
