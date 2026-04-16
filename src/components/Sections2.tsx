import fron_end_dev from "../assets/img/fron-end-dev.jpg";
const Sections2 = () => {
  return (
    <>

      <div className="part">
        <div className="container">
          <section id="about" className="about">
            <div className="container">
            </div>
          </section>
          {/* <div className="part_box1"> */}


            <h2 className="part_text">About <span className="part_span">me</span></h2>
            <div className="part_line"></div>
            <div className="part_box">
              <p className="part_box_text2">
                I am a Frontend Developer focused on building modern and responsive web
                applications using React. I enjoy creating clean user interfaces and learning new technologies to
                improve my skills. Currently, I am improving my JavaScript and React knowledge to build real-world
                projects and grow as a developer
              </p>
              <img className="part_box_img" src={fron_end_dev} alt="" />

            </div>

            <p className="part_wisdom">"I believe that consistency beats talent — <span className="part_wisdom_color"> small improvements every day lead to great results."</span></p>
            <p className="part_wisdom_small">---Programner's Wisdom---</p>
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

export default Sections2