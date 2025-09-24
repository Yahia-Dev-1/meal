import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slideshow = () => {
  const slides = [
    {
      img: require("../assets/1.jpg"),
      title: "🍳 الوجبة الأولى",
      desc: "200 جرام بيض - 100 جرام جبنة قريش - 200 جرام بطاطس - زيت زيتون",
    },
    {
      img: require("../assets/2.jpg"),
      title: "🍛 الوجبة الثانية",
      desc: "100 جرام صدور دجاج - 450 جرام أرز - 150 جرام سلطة",
    },
    {
      img: require("../assets/3.jpg"),
      title: "🥘 الوجبة الثالثة",
      desc: "100 جرام دجاج - 450 جرام أرز - 150 جرام سلطة - زيت زيتون",
    },
    {
      img: require("../assets/4.jpg"),
      title: "🍠 الوجبة الرابعة",
      desc: "400 جرام بطاطا - موزة - 50 جرام لوز - قهوة",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-[95%] max-w-xl mx-auto rounded-2xl overflow-hidden shadow-xl border-2 border-red-700">
      {/* الصورة */}
      <img
        src={slides[current].img}
        alt={slides[current].title}
        className="w-full h-50 sm:h-72 md:h-80 object-cover transition-all duration-700"
      />

      {/* النص فوق الصورة */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-3 sm:p-4 text-center">
        <h2 className="text-lg sm:text-xl font-bold text-red-400 drop-shadow-lg">
          {slides[current].title}
        </h2>
        <p className="text-gray-200 mt-1 text-xs sm:text-sm">{slides[current].desc}</p>
      </div>

      {/* أزرار التنقل */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-3 -translate-y-1/2 bg-black/50 hover:bg-red-600 p-2 sm:p-3 rounded-full transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-3 -translate-y-1/2 bg-black/50 hover:bg-red-600 p-2 sm:p-3 rounded-full transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* نقاط أسفل */}
      <div className="flex justify-center space-x-2 absolute bottom-2 left-0 right-0">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-2 sm:h-2 rounded-full cursor-pointer transition ${
              current === index ? "bg-red-500 scale-125" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
