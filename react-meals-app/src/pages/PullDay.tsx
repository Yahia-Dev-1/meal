import IngredientList from "../components/IngredientList";
import MacroCard from "../components/MacroCard";

const PullDay = () => {
  // Updated: Leg exercises for Pull Day as requested
  // Each exercise with a video filename (assumed to be in assets/videos/)
  const exercises = [
    {
      name: "Wide Grip T-Bar Row",
      sets: "3 × 8–12",
      video: require("../assets/Wide Grip T-Bar Row.mp4")
    },
    {
      name: "Seated Cable Row (Close Grip)",
      sets: "3 × 8–12",
      video: require("../assets/Seated Cable Row.mp4")
    },
    {
      name: "Lat Pulldown",
      sets: "3 × 8–12",
      video: require("../assets/Lat Pulldown.mp4")
    },
    {
      name: "Back Extension",
      sets: "3 × 15 (hold last rep 30s)",
      video: require("../assets/Back Extension.mp4")
    },
    {
      name: "Rear Delt Machine Fly / Reverse Pec Deck Machine",
      sets: "3 × 12",
      video: require("../assets/Rear Delt Machine Fly.mp4")
    },
    {
      name: "Behind-the-Back Cable Curl",
      sets: "3 × 10–12",
      video: require("../assets/Behind-the-Back Cable Curl .mp4")
    },
    {
      name: "Dumbbell Hammer Curl",
      sets: "3 × 12",
      video: require("../assets/Dumbbell Hammer Curl.mp4")
    },
  ];

  const summary = {
    focus: "Back, Biceps, Rear Delts",
    sets: 18,
    duration: "60-75 min"
  };

  return (
    <div className="min-h-screen px-4 py-8 flex flex-col items-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 text-white transition-colors duration-500">
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 mb-6 mt-2 animate-fadeIn animate-slideDown">
        <span className="block text-xl md:text-2xl font-bold text-yellow-400 drop-shadow-lg text-center tracking-wide">
          Pull for strength and width! 🏋️‍♂️
        </span>
        <span className="block text-xl md:text-2xl font-bold text-rose-300 drop-shadow-lg text-center tracking-wide">
          Back, Biceps & Rear Delts
        </span>
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-12 drop-shadow-lg tracking-wide text-rose-400">
        Pull Day (Back & Biceps)
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
                ) : (
                  <div className="text-red-400 text-center mt-2 text-base font-semibold">
                    لا يوجد فيديو لهذا التمرين حالياً
                  </div>
                )}
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

export default PullDay;
