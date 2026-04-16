import evos from "../assets/img/evos.webp";
import max_web_media from "../assets/img/max web media.png";
import glort_3 from "../assets/img/glort_3.png";
import  { useState } from "react";
import "./Slider.scss";

const Section1 = () => {
  const [index, setIndex] = useState(0);
  const slides = [
      {
    id: 1,
    img: evos,
    title: "EVOS Company",
    desc: "I worked as a Technical Support Specialist at EVOS in 2025 for 4–5 months. My main responsibility was monitoring and supporting company branches remotely. Whenever technical issues occurred, I connected to the branch systems and resolved problems efficiently.I handled issues such as menu items not appearing on monitors or ordering systems, and ensured everything was running smoothly. During this time, I worked under pressure, improved my problem-solving skills, and gained valuable real-world experience in technical support..",
    position:"Technical Support Specialist",
    Date: '  september 2024 -- december(4 months)'
  },
 
    {
    id: 2,
    img: max_web_media ,
    title: "Max Web Media Company",
    desc: "I worked at Max Web Media, one of the fast-growing companies in Tashkent, as a Controller. My responsibility was to monitor digital screens installed on city buses and ensure they were operating properly.If any screen was turned off or not functioning, I reported the issue immediately and took the necessary actions according to company regulations. This role helped me develop strong attention to detail, responsibility, and the ability to work efficiently in a fast-paced environment..",
    position:" Controller",
    Date: '  april 2025 -- january(9 months)'
  },
 
    {
    id: 3,
    img: glort_3,
    title: "Glotr.uz Company",
    desc: "I worked at Glotr.uz, an online marketplace similar to OLX and Uzum Market, as a Technical Specialist. In this role, I provided support to clients using the platform and helped resolve technical issues related to the website.My responsibilities included assisting users who had difficulties understanding how to use the platform, guiding them step-by-step, and explaining its features clearly. Compared to my previous roles, this position focused more on direct communication with clients and improving their overall user experience.This experience helped me strengthen my communication skills, patience, and ability to explain technical concepts in a simple and understandable way..",
    position:" Technical Support Specialist",
    Date: '  february 2025 -- april(2 months)'

    

  }
  ];

  const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };


  return (
    <>
  

    <div className="section_line">
       <section id="jobs" className="jobs">
      <div className="container">
      </div>
    </section>
    <div className="slider">

   
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}

      >
            {slides.map((slide) => (
      <div key={slide.id} className="slide">

        <img className="slide_img" src={slide.img} alt="" />

        <h2 className="slide_title">{slide.title}</h2>

        <p className="slide_position"> <span>🌐 Position:</span>{slide.position}</p>

        <p className="slide_desc">{slide.desc}</p>

        <p className="slide_date"> <span>📅 Date:</span>{slide.Date}</p>
      </div>
    ))}

      </div>

      <button className="btn prev" onClick={prev}>←</button>
      <button className="btn next" onClick={next}>→</button>
    </div>
    </div>
    
    </>
  );

};

export default Section1;

