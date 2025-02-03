import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ currentPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
      if (window.innerWidth >= 1000) {
        setMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToHome = () => {
    setCurrentPage("home");
    navigate("/");
    closeMenu();
  };

  const handleScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      closeMenu();
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    document.body.style.overflow = menuOpen ? "auto" : "hidden";
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <div className="ui top inverted fixed large menu">
        {isMobile ? (
          <button className="mobile-menu" onClick={toggleMenu}>
            <img src="src/assets/menu_icon.png" alt="Menu" className="menu-icon" />
          </button>
        ) : (
          <div className="right menu">
            {currentPage === "home" ? (
              <>
                <a className="item" href="#about" onClick={handleScroll}>About</a>
                <a className="item" href="#research" onClick={handleScroll}>Research</a>
                <a className="item" href="#people" onClick={handleScroll}>People</a>
                <a className="item" href="#project" onClick={handleScroll}>Project</a>
                <a className="item" href="#achievements" onClick={handleScroll}>Achievements</a>
                <a className="item" href="#publications" onClick={handleScroll}>Publications</a>
                <a className="item" href="#positions" onClick={handleScroll}>Positions</a>
                <a className="item" href="#teaching" onClick={handleScroll}>Teaching</a>
                <a className="item" href="#contact" onClick={handleScroll}>Contact</a>
              </>
            ) : (
              <a className="item" onClick={goToHome}>Go to home page</a>
            )}
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className="mobile-dropdown">
          {currentPage === "home" ? (
            <>
              <a className="item" href="#about" onClick={handleScroll}>About</a>
              <a className="item" href="#research" onClick={handleScroll}>Research</a>
              <a className="item" href="#people" onClick={handleScroll}>People</a>
              <a className="item" href="#project" onClick={handleScroll}>Project</a>
              <a className="item" href="#achievements" onClick={handleScroll}>Achievements</a>
              <a className="item" href="#publications" onClick={handleScroll}>Publications</a>
              <a className="item" href="#positions" onClick={handleScroll}>Positions</a>
              <a className="item" href="#teaching" onClick={handleScroll}>Teaching</a>
              <a className="item" href="#contact" onClick={handleScroll}>Contact</a>
            </>
          ) : (
            <a className="item" onClick={goToHome}>Go to home page</a>
          )}
        </div>
      )}

      <style>
        {`
          .mobile-menu {
            position: absolute;
            right: 10px;
            top: 5px;
            background: none;
            border: none;
            cursor: pointer;
            z-index: 1000;
          }

          .menu-icon {
            width: 30px;
            height: 30px;
            filter: brightness(0) invert(1); /* Makes it white for dark background */
          }

          .right.menu {
            display: flex;
          }

          .mobile-dropdown {
            position: fixed;
            top: 40px;
            left: 0;
            width: 100%;
            background:rgb(22, 22, 22);
            padding: 15px;
            display: flex;
            flex-direction: column;
            z-index: 999;
            transition: all 0.3s ease-in-out;
          }

          .mobile-dropdown .item {
            color: white;
            padding: 10px 15px;
            text-decoration: none;
            transition: background 0.3s;
          }

          .mobile-dropdown .item:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          @media (max-width: 1000px) {
            .right.menu {
              display: none;
            }

            .mobile-menu {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
