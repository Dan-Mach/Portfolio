// src/components/BackgroundWatermarks.jsx

export default function BackgroundWatermarks() {
  // FIX: Converted JavaScript image imports into pure root server path strings
  const watermarks = [
    { img: "/D.jpeg", style: "opacity-5" },
    { img: "/M.jpeg", style: "opacity-[0.03]" },
    { img: "/R.jpeg", style: "opacity-5" }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none flex items-start justify-center">
      <div className="absolute top-[8%] w-full max-w-7xl px-4 md:px-12 flex justify-center items-center gap-12 lg:gap-24">
        {watermarks.map((mark, i) => (
          <div 
            key={i} 
            className={`w-1/4 max-w-[180px] aspect-square flex items-center justify-center mix-blend-screen transition-opacity duration-700 ${mark.style}`}
          >
            <img 
              src={mark.img} 
              alt="" 
              className="w-full h-full object-contain filter grayscale" 
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}