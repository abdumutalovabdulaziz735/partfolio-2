import email_icon_header from "../assets/img/email_icon_header.png";
import github_icon_header from "../assets/img/github_icon_header.png";
import phone_icon_header from "../assets/img/phone_icon_header.png";
import hedaer_boy from "../assets/img/hedaer_boy.png";
const Header = () => {
  return (
    <>
    <div className="header">
        <div className="container">
            <div className="header_left">
                <h2 className="header_left_big">Hi, I am</h2>
                <h1 className="header_left_text">Abdumutalov <br /> Abdulaziz</h1>
                <p className="header_left_small">Front-end Developer</p>
                <div className="header_left_icons">
                    <img className='header_left_icons_icon1' src={email_icon_header} alt="" />
                    <img className='header_left_icons_icon2' src={github_icon_header} alt="" />
                    <img className='header_left_icons_icon3' src={phone_icon_header} alt="" />
                </div>
            </div>
            <div className="header_right">
                <img className='header_right_img' src={hedaer_boy} alt="" />
            <div className="header_background"></div> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Header