import whatsapp from "../assets/img/whatsapp.png";
import Hh from "../assets/img/Hh.png";
import telegram from "../assets/img/telegram.png";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";
import youtube from "../assets/img/youtube.png";
import my_picture from "../assets/img/my_picture_3.jpg";




const Footer = () => {
  return (
    <>
    <div className="footer">
        <div className="container">
            <div className="footer_box">
                <div className="footer_box_cover">
                    <p className="footer_box_list_text">how you can contact with me</p>
                <ul className="footer_box_list">
                    <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="WhatsApp" className="footer_list_img" />
                    </a>

                    <a href="https://tashkent.hh.uz/account/login?role=applicant&backurl=%2F%3Fnetwork%3Dg%26adposition%3D%26keyword%3Dhh%26gad_source%3D1%26gad_campaignid%3D16576004088%26gbraid%3D0AAAAAofeEzSRJh6JcbhgL8JPzc2y0LUP4%26gclid%3DCjwKCAjwhLPOBhBiEiwA8_wJHJCO8_WNtkWO1WmrJuGDf3SJwMo4kiZy-e5ARP_0ovg-YTWduRuJKRoCTy8QAvD_BwE&hhtmFrom=main" target="_blank" rel="noopener noreferrer">
                    <img src={Hh} alt="" className="footer_list_img" />
                    </a>

                    <a href="https://web.telegram.org/k/" target="_blank" rel="noopener noreferrer">
                    <img src={telegram} alt="Telegram" className="footer_list_img" />
                    </a>
                </ul>

                    <p className="footer_box_list_text">Soon</p>
                    <ul className="footer_box_list2">
                    <a href="#"><img src={instagram} alt="" className="footer_list_img" /></a>
                    <a href="#"><img src={facebook} alt="" className="footer_list_img" /></a>
                    <a href="#"><img src={youtube} alt="" className="footer_list_img" /></a>
                </ul>
                </div>
                <img src={my_picture} alt="" className="footer_box_picture" />
                <div className="footer_box_learn">
                    <p className="footer_box_tips">Behind every clean interface is a lot of <br /> careful thinking and problem solving.</p>
                    {/* <a href="" className="footer_box_link">📂 Download CV</a> */}
                    <div className="footer_box_phone">
                        <p className="footer_box_link1">Contact:</p>
                        <p className="footer_box_link"> ☎️ (+998) 94 060-50-77</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer