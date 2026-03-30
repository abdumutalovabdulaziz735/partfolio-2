import { Link, NavLink, useLocation } from 'react-router-dom'
import logo from "../assets/img/logo.png";
const Nav = () => {
//     const links =[
//         {url: '/', name: 'Home'},
//         {url: '/Project', name: 'Projects'},
//         {url: '/History', name: 'About me'}
//     ]
//   return (
//     <>
//     <div className="nav">
//         <div className="nav_list_background"></div> {/* 🔥 here */}
//         <div className="container">
//             <div className="nav_box">
//                 <Link to='/' className='nav_logo'> <img src={logo} alt="" /></Link>
//                 <ul className="nav_list">
//                     {links.map((link,i)=>(
//                         <li  key={i}>
//                             <NavLink className='nav_list_link' to={link.url}>{link.name}</NavLink>
//                         </li>
                        
//                     ))}
//                 </ul>
//             </div>
//             {/* <div className="nav_list_background"></div> */}
//                     {/* <img className='nav_list_background' src={background_nav} alt="" /> */}
//         </div>
//     </div>
//     </>
//   )
 const location = useLocation(); 

  const isHome = location.pathname === "/"; 

  const links = [
    { url: '/', name: 'Home' },
    { url: '/project', name: 'Projects' },
    { url: '/history', name: 'About me' }
  ];

  return (
    <div className={`nav ${isHome ? "nav--home" : "nav--other"}`}>
      

      {isHome && <div className="nav_list_background"></div>}

      <div className="container">
        <div className="nav_box">
          <Link to='/' className='nav_logo'>
            <img src={logo} alt="" />
          </Link>

          <ul className="nav_list">
            {links.map((link,i)=>(
              <li key={i}>
                <NavLink className='nav_list_link' to={link.url}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav