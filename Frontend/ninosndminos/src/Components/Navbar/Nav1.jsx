import React from 'react'
// import './Nav1.js'
import './Nav1.css'
import logo from '../../assets/blacklogo.png'

const Nav1 = () => {
  return (
      <div>
            
            <section className="nav__side">
                <nav>
                    {/* Sidebar */}

                    <div className="links">
                      <button >
                      <i class="fa-solid fa-bars menu"></i>
                      <i class="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                    {/* sidebar */}
                    
                    <div className="barand">
                        <img src={logo} alt="" />
                    </div>
                    <div className="links">
                        
                        <div className="links">
                          <button>
                            <i className="fa-solid fa-cart-shopping menu"></i>
                            <i className="fa-regular fa-circle-user "></i>
                            </button>
                        </div>
                    </div>
                    <div className="profilre_dropdown">
                        <ul>
                            <li><a href="#">My Profile</a></li>
                            <li><a href="#">Sign in</a></li>
                        </ul>
                    </div>
                </nav>
                
            </section>
    </div>
  )
}

export default Nav1