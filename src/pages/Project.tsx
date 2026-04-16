import viu_cinema from "../assets/img/viu_cinema.jpg";
import { useState } from "react";
import Footer from "../components/Footer";
import Aurora from "../components/Aurora";
import clock from "../assets/img/clock-side.jpg";
import fang from "../assets/img/fang shui.jpg";

const Project = () => {
  const [index, setIndex] = useState(0);
  // "Slide 1", "Slide 2", "Slide 3"

  const slides = [
  {
    id: 1,
    img: viu_cinema,
    title: "🎬 Vue Cinemas Website",
    desc: "I developed a modern cinema website based on a Figma design, focusing on creating a clean, responsive, and user-friendly interface. The goal of this project was to replicate a real-world movie booking experience and improve my front-end development skills.The application allows users to explore movies, view details, and interact with a visually engaging UI inspired by real cinema platforms. I focused on building a structured layout, reusable components, and smooth navigation between sections.This project helped me understand how to convert design prototypes into functional web interfaces while maintaining design consistency and responsiveness across devices",
    position: "JavaScript | HTML | SCSS",
    liveLink: "https://abdumutalovabdulaziz735.github.io/viu_cinema/",
    githubLink: "https://desktop.github.com/download/"
  },

  {
    id: 2,
    img: clock,
    title: "⏰ Clock Website",
    desc: "I developed a simple and responsive Clock Website using HTML and SCSS. The main goal of this project was to strengthen my front-end fundamentals and practice building clean UI layouts with a focus on structure and design consistency.The website displays a visually appealing clock interface and demonstrates my ability to organize components, style elements effectively, and create a user-friendly layout. Through this project, I improved my understanding of responsive design and how to convert a simple idea into a functional web interface.",
    position: "HTML | SCSS",
    liveLink: "https://abdumutalovabdulaziz735.github.io/clock-html/",
    githubLink: "https://desktop.github.com/download/"
  },

  {
    id: 3,
    img: fang,
    title: "🧧 Feng Shui Website",
    desc: "A responsive informational website built with HTML and SCSS, designed around Feng Shui principles of balance and harmony. The project focuses on clean layout structure, simple navigation, and aesthetic UI design..",
    position: "HTML5, SCSS (SASS)",
    liveLink: "https://your-third-project.com",
    githubLink: "https://desktop.github.com/download/"
  }
];


  // const slides = [
  //   {
  //     id: 1,
  //     img: viu_cinema,
  //     title: "🎬 Vue Cinemas Website",
  //     desc: "I developed a modern cinema website based on a Figma design, focusing on creating a clean, responsive, and user-friendly interface. The goal of this project was to replicate a real-world movie booking experience and improve my front-end development skills.The application allows users to explore movies, view details, and interact with a visually engaging UI inspired by real cinema platforms. I focused on building a structured layout, reusable components, and smooth navigation between sections.This project helped me understand how to convert design prototypes into functional web interfaces while maintaining design consistency and responsiveness across devices.",
  //     position: "JavaScript (ES6+) | HTML5 | SCSS (SASS)",
  //     Date: "Visit-Side",
  //     git_hub: "Git-hub",
  //   },

  //   {
  //     id: 2,
  //     img: clock ,
  //     title: "clock-webside",
  //     desc: "I worked at Max Web Media, one of the fast-growing companies in Tashkent, as a Controller. My responsibility was to monitor digital screens installed on city buses and ensure they were operating properly.If any screen was turned off or not functioning, I reported the issue immediately and took the necessary actions according to company regulations. This role helped me develop strong attention to detail, responsibility, and the ability to work efficiently in a fast-paced environment..",
  //     position: " HTML5 | SCSS (SASS)er",
  //     Date1: "Visit-Side",
  //     git_hub: "Git-hub",
  //   },

  //   {
  //     id: 3,
  //     // img: glort_3,
  //     title: "Glotr Company",
  //     desc: "I worked at Glotr.uz, an online marketplace similar to OLX and Uzum Market, as a Technical Specialist. In this role, I provided support to clients using the platform and helped resolve technical issues related to the website.My responsibilities included assisting users who had difficulties understanding how to use the platform, guiding them step-by-step, and explaining its features clearly. Compared to my previous roles, this position focused more on direct communication with clients and improving their overall user experience.This experience helped me strengthen my communication skills, patience, and ability to explain technical concepts in a simple and understandable way..",
  //     position: " Technical Support Specialist",
  //     Date: "Visit-Side",
  //     git_hub: "Git-hub",
  //   },
  // ];

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
        <div className="slider1">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="slide">
                <div className="slide_cover">
                  <img className="slide_img1" src={slide.img} alt="" />
                  <div className="slide_cover_box">
                    <h2 className="slide_title">{slide.title}</h2>

                    <p className="slide_position">
                      {" "}
                      <span>tools used in website : </span>
                      {slide.position}
                    </p>

                    <p className="slide_desc">{slide.desc}</p>
                    <div className="slide_cover_box_links">
                      <a href={slide.liveLink} className="slide_link" target="_blank">
                        Visit Site
                      </a>

                      <a href={slide.githubLink} className="slide_link" target="_blank">
                        GitHub
                      </a>
                    </div>

                    
                
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="btn prev" onClick={prev}>
            ←
          </button>
          <button className="btn next" onClick={next}>
            →
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
