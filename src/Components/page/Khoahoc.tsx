import { Link } from "react-router-dom"
import "./Lotrinh.css"
import Navbar from "../layout/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../layout/Footer";


function Khoahoc() {
    interface newcourse {
        id: number;
        name: string;
        title: string;
        lesson: string;
        image: string;
        hour: number;
        status: string;
      }
      
      const [newcourse, setNewcourse] = useState<newcourse[]>([]);
  
    useEffect(() => {
      const loadUser = async () => {
        const result = await axios.get("http://localhost:3000/newcourse");
        setNewcourse(result.data);
      };
  
      loadUser();
    }, []);
    console.log(newcourse);
    
  return (
    <>
    <Navbar/>
    <section style={{background:"white"}} className="ant-layout">
    <main className="ant-layout-content">
        <div className="roadmap-container">
            <header className="roadmap-header">
                <div className="container text-center">
                <h1>Khóa học</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-scroll justify-content-center">
                        <li className="breadcrumb-item">
                            <Link to = "/Home"   className="text-secondary">Trang chủ</Link>
                        </li>
                        <li className="breadcrumb-item text-secondary" style={{color:"red"}}>/ khóa học</li>
                    </ol>
                </nav>
                </div>
            </header>
            <div className="course-filter">
                <div className="filter-box">
                    <div>
                        <span style={{color:"red"}}>Rikkei Academy</span>
                        &nbsp;sẵn có
                        &nbsp;<span style={{color:"red"}}><u>9 khóa học</u></span>
                        &nbsp;cho bạn
                    </div>
                    <div className="filter-items">
                        <div className="filter-search">
                            <div className="input-holder">
                                <input className="search-input" placeholder="Tìm kiếm khóa học" style={{color: "rgb(0, 0, 0)"}} type="text" />
                                <div className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="ant-row mb-4" style={{marginLeft: "-12px", marginRight: "-12px"}}>
   {newcourse.map((course) => {
            return (
                              <div className="ant-col mt-4 ant-col-xs-24 ant-col-lg-6" key={course.id} style={{paddingLeft: "12px", paddingRight: "12px"}}>
                    <div className="roadmap-item">
                        <div className="roadmap-item-image">
                            <Link to = "./course"><img className="road-item-image-link" width={100} height={100} src={course.image} alt="" /></Link>
                        </div>
                        <div className="roadmap-item-content">
                            <h5 className="ant-typography"><Link to="/khoahoc/course">{course.title}</Link></h5>
                            <span className="ant-typography ant-typography-secondary roadmap-item-content-description">
                                <Link to= "./course">  {course.status}</Link>
                                </span>
                             <div className="roadmap-item-content-footer">
                                <div className="roadmap-footer-content">
                                <i style={{color:"black"}} className="fa-solid fa-calendar-days"></i>
                                <span>{course.lesson}</span>
                                </div>
                                <div className="roadmap-footer-content">
                                <i style={{color:"black"}} className="fa-solid fa-clock"></i>
                                <span>{course.hour}</span>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            )})}
  
            </div>
        </div>
    </main>
    <Footer/>
    </section>
    
</>
  )
}

export default Khoahoc