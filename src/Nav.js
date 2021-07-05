import React,{useState,useEffect} from 'react'
import "./nav.css"
import netflix from  "./netflix.png"
const Nav = () => {
    const [show, handleshow] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleshow(true)
        } else handleshow(false);
      });
      return () => {
        window.removeEventListener("scroll")
      }
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>

        <img 
        className="nav_logo"
        src={netflix}
        alt="netflixLogo"
        />

        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
        className="nav_avatar"
        alt="netflixAvatar"
        />
            
        </div>
    )
}

export default Nav
