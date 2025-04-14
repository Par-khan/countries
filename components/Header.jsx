import { useContext, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext";


export default function Header({theme}) {
  const[isdark,setisdark]= useContext(ThemeContext);
  // if(isdark){
  //   document.body.classList.add('dark')
  // }
  // else{
  //   document.body.classList.remove('dark')
  // }
  return (
    <header className={`header-container ${isdark? 'dark':''}`}>
    <div className="header-content">
      <p className="title">
        <a href="/">Where in the world?</a>
      </p>
      <p className="theme-changer-light dark" style={{ cursor: "pointer" }} onClick={()=>{

        setisdark(!isdark)
        localStorage.setItem('isDarkMode',!isdark)
      }}>
        <i className={`fa-solid fa-${isdark?'sun':'moon'}`} />
        &nbsp;{`${isdark? 'Light Mode':'Dark Mode'}`}
      </p>
      
     
    </div>
  </header>
  
  )
}
