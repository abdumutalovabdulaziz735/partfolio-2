// import React, { useState } from "react";

// const Slider = () => {
//   const [index, setIndex] = useState(0);

//   const slides = ["Slide 1", "Slide 2", "Slide 3"];

//   const next = () => {
//     setIndex((prev) => (prev + 1) % slides.length);
//   };

//   const prev = () => {
//     setIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div style={{ overflow: "hidden", width: "300px" }}>
//       <div
//         style={{
//           display: "flex",
//           transform: `translateX(-${index * 100}%)`,
//           transition: "0.3s",
//         }}
//       >
//         {slides.map((slide, i) => (
//           <div
//             key={i}
//             style={{
//               minWidth: "100%",
//               textAlign: "center",
//               padding: "40px",
//               background: "#333",
//               color: "#fff",
//             }}
//           >
//             {slide}
//           </div>
//         ))}
//       </div>

//       <button onClick={prev}>←</button>
//       <button onClick={next}>→</button>
//     </div>
//   );
// };

// export default Slider;
import evos from "../assets/img/evos.webp";

import  { useState } from "react";
import "./Slider.scss";

const Section1 = () => {
  const [index, setIndex] = useState(0);

  const slides = ["Slide 1", "Slide 2", "Slide 3"];

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}

      >

        {slides.map((slide, i) => (
          <div key={i} className="slide">
            {slide}
            <div className="slide_one">
              <img className="slide_img" src={evos} alt="" />
            </div>
            
            
          </div>
        ))}
      </div>

      <button className="btn prev" onClick={prev}>←</button>
      <button className="btn next" onClick={next}>→</button>
    </div>
  );
};

export default Section1;

