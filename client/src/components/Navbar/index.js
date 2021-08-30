import React, { useState } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import { sidebarData } from "./data"
import "./navbar.css"
import Modal from "../Modal"

function Navbar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  const [currentCategory, setCurrentCategory] = useState(sidebarData)
  const [showModal, setShowModal] = useState(false)

  const openModal = () => setShowModal(!showModal)

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <h1 key={currentCategory.title} className={currentCategory.class2}>
          {currentCategory.title}
        </h1>
        {currentCategory.title === "Dashboard" ? (
          <Link to="#" className="plus-icon">
            <AiIcons.AiOutlinePlus onClick={openModal} />
          </Link>
        ) : (
          <AiIcons.AiOutlinePlus style={{ color: "#274156" }} />
        )}
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {sidebarData.map((item, i) => {
            const url = ('http://localhost:3000/dashboard')
            if (document.location.href === url) {
              try{
                const boardName = document.querySelector('.title')
                boardName.innerText = 'Dashboard'
              } catch(e){
                console.log(e)
              }
            }
            return (
              <li key={i} className={item.class}>
                <Link to={item.path} onClick={() => setCurrentCategory(item)}>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Navbar