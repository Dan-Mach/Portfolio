import letterD from "/public/D.jpeg";
import letterM from "/public/M.jpeg";
import letterR from "/public/R.jpeg";

export default function BackgroundWatermarks() {
  return (
    <div className="watermark-wrapper">
      <div className="watermark-row">
        
        {/* Letter D */}
        <div className="watermark-item letter-d">
          <img 
            src={letterD} 
            alt="" 
            className="watermark-img" 
            draggable="false"
          />
        </div>

        {/* Letter M */}
        <div className="watermark-item letter-m">
          <img 
            src={letterM} 
            alt="" 
            className="watermark-img" 
            draggable="false"
          />
        </div>

        {/* Letter R */}
        <div className="watermark-item letter-r">
          <img 
            src={letterR} 
            alt="" 
            className="watermark-img" 
            draggable="false"
          />
        </div>

      </div>
    </div>
  );
}