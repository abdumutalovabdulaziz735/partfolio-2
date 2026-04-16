import ts from "../assets/img/ts.png";
import figma from "../assets/img/figma.svg";
import html from "../assets/img/html.svg";
import js from "../assets/img/js.svg";
import react from "../assets/img/react.svg";
import scss from "../assets/img/scss.svg";



import { useState } from "react";
import Footer from "../components/Footer"
import Aurora from "../components/Aurora";

const History = () => {
    const [index, setIndex] = useState(0);
  // "Slide 1", "Slide 2", "Slide 3"
  const slides = [
      {
    id: 1,
    img: html,
    title: "HTML",
    desc: "💻 HTML I have a solid understanding of HTML5 and use it to create well-structured, semantic, and accessible web pages. I am familiar with proper use of tags such as headings, sections, forms, and media elements. I focus on writing clean and readable markup that improves both SEO and maintainability. I also understand how to organize content logically to create a strong foundation for any web project.",
    // position:"Technical Support Specialist",
    // Date: '  september 2024 -- december(4 months)'
  },
 
    {
    id: 2,
    img: scss ,
    title: "CSS",
    desc: "🎨 CSS I am confident in using CSS3 to design modern and visually appealing user interfaces. I work with Flexbox and Grid to build responsive layouts that adapt to different screen sizes. I pay attention to spacing, alignment, and consistency to ensure a good user experience. I also use animations, transitions, and hover effects to make interfaces more interactive and engaging.",
    // position:" Controller",
    // Date: '  april 2025 -- january(9 months)'
  },
 
    {
    id: 3,
    img: js,
    title: "JavaScript",
    desc: "⚙️ JavaScript (ES6+) I have a strong foundation in JavaScript and understand core concepts such as variables, functions, arrays, objects, and control structures. I use modern ES6+ features like arrow functions, destructuring, template literals, and modules. I also work with DOM manipulation to create dynamic and interactive web pages. I am continuously improving my problem-solving and logical thinking skills through practice",
    // position:" Technical Support Specialist",
    // Date: '  february 2025 -- april(2 months)'
  },
     {
    id: 4,
    img: react,
    title: "React",
    desc: "⚛️ React.js I use React to build dynamic and scalable user interfaces. I understand component-based architecture and how to break down complex UIs into reusable components. I work with props, state, and React hooks such as useState and useEffect. I focus on writing clean and maintainable code, organizing projects properly, and improving performance where needed.",
    // position:" Technical Support Specialist",
    // Date: '  february 2025 -- april(2 months)'
  },
     {
    id: 5,
    img: figma,
    title: "Figma",
    desc: "🎯 Figma I use Figma to understand UI/UX designs and convert them into real web applications. I can analyze layouts, spacing, colors, typography, and components from design files. I focus on accurately translating designs into responsive and pixel-perfect interfaces. Working with Figma helps me improve both my design understanding and front-end development skills",
    // position:" Technical Support Specialist",
    // Date: '  february 2025 -- april(2 months)'
  },
       {
    id: 6,
    img: ts,
    title: "TypeScript",
    desc: "🔷 TypeScript I have a basic understanding of TypeScript and use it to improve code quality and reduce errors. I work with types, interfaces, and type annotations in React projects. TypeScript helps me write more predictable and structured code, especially in larger applications. I am still learning and improving my TypeScript skills.",
    // position:" Technical Support Specialist",
    // Date: '  february 2025 -- april(2 months)'
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
    <Aurora/>
    <div className="section_line">
    <div className="slider2">
      <div
        className="slider-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}

      >
            {slides.map((slide) => (
      <div key={slide.id} className="slide">

        <img className="slide_img2" src={slide.img} alt="" />

        <h2 className="slide_title1">{slide.title}</h2>

        {/* <p className="slide_position"> <span>Position:</span>{slide.position}</p> */}

        <p className="slide_desc">{slide.desc}</p>

        {/* <p className="slide_date"> <span>Date:</span>{slide.Date}</p> */}
      </div>
    ))}

      </div>

      <button className="btn prev" onClick={prev}>←</button>
      <button className="btn next" onClick={next}>→</button>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default History