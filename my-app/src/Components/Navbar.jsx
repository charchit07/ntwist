import React from 'react'
import style from "../Styles/Navbar.module.css"

const Navbar = () => {
  return (
   <div className={style.container}>
    <div className={style.back}>
    <div className={style.navbar}>
       <img src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png" alt="" />
      <div className={style.nav}>
      <li><a href="">Home</a></li>
       <li><a href="">Industries</a>
        <div>
            <div className={style.dropdown}>
                <div>
                    <div>
                        <h3> Sustainability</h3>
                        <div className="p">
                            <div>
                        {/* <p className="ft-12"> See how CoSchedule customers have found success.</p> */}
                            </div>
                        </div>
                        <div className="p">
                            <div>
                                <h3>Mineral Processing</h3>
                                {/* <p className="ft-12">Get your custom ROI report & see what your team could save by switching to CoSchedule!</p> */}
                            </div>

                        </div>

                        <div className="p">
                            <div>
                                <h3>Mine-To-Mill-To-Mine Otimization</h3>
                                {/* <p className="ft-12">Get your custom ROI report & see what your team could save by switching to CoSchedule!</p> */}
                            </div>
                            
                        </div>

                        <div className="p">
                            <div>
                                <h3>Oil & Gas</h3>
                                {/* <p className="ft-12">Get your custom ROI report & see what your team could save by switching to CoSchedule!</p> */}
                            </div>
                            
                        </div>
                    </div>
            </div>
            </div>
        </div>
       </li>
      <li><a href="">Ai Software</a></li> 
      <li><a href="">Blog</a></li> 
      <li><a href="" className={style.kB}>Contact Us</a></li> 
      </div>
    </div>
     <div className={style.main}>
   <div className={style.head}>
     <h1> Data-powered solutions<br/>
      for Industrial Excellence
     </h1>
     <button className={style.btn}>Read More</button>
   </div>
   <div >
    <img className={style.image} src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png" alt="" />
   </div>
     </div>
    </div>
    </div>
  )
}

export default Navbar;