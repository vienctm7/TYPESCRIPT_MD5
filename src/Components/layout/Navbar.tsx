import { Link } from "react-router-dom"
import "./Main.css"
import { Button } from 'antd';

function Navbar() {
  return (
    <div>
      <header className="ant-layout-header">
      
          <div className="ant-row ant-row-no-wrap col-drawer-no-wrap ant-row-drawer top-header">
            <Link to="/home">
              <img
                style={{
                  alignItems: "center",
                  fontSize: "15px",
                  paddingLeft: "25px",
                  paddingTop: "10px"
                }}
                src="https://learn.rikkeiacademy.com/static/media/RIKKEI_ACADEMY_LOGO.e997e6f7.png"
                width={180}
                alt=""
              />
            </Link>
            <div className="ant-col col-menu col-menu-drawer" style={{ flex: "1 1 auto", minWidth: "0px" }}>
              <ul style={{ listStyle: "none" }} className="ant-menu-overflow ant-menu ant-menu-root ant-menu-horizontal ant-menu-light">
                <li className="ant-menu-overflow-item ant-menu-item ant-menu-item-selected">
                  <i style={{ color: "#333" }} className="fa-solid fa-house"></i>
                  <span className="ant-menu-title-content"><Link to="/home" style={{ textDecoration: "none", color: "black" }}>
                    Trang chủ
                  </Link></span>
                </li>
                <li className="ant-menu-overflow-item ant-menu-item">
                  <i style={{ color: "#333" }} className="fa-solid fa-road"></i>
                  <span className="ant-menu-title-content"><Link to="/lotrinh" style={{ textDecoration: "none", color: "black" }}>
                    Lộ trình
                  </Link></span>
                </li>
                <li className="ant-menu-overflow-item ant-menu-item">
                <i style={{ color: "#333" }} className="fa-solid fa-list"></i>
                  <span className="ant-menu-title-content"><Link to="/khoahoc" style={{ textDecoration: "none", color: "black" }}>
                    Khóa học
                  </Link></span>
                </li>
                <li className="ant-menu-overflow-item ant-menu-item">
                  <i style={{ color: "#333" }} className="fa-solid fa-book-open"></i>
                  <span className="ant-menu-title-content"><Link to="/baiviet" style={{ textDecoration: "none", color: "black" }}>
                    Bài viết
                  </Link></span>
                </li>
                <li className="ant-menu-overflow-item ant-menu-item" >
                  <div style={{ position: "relative" }} className="dropdown">
                    <span className="dropbtn" style={{ color: "black", position: "relative", bottom: "15px" }}>...</span>
                    <ul className="dropdown-content" style={{ position: "absolute", top:"10px", left:"10px" }}>
                      <li>
                        <a href="#">Bảng điều khiển</a>
                      </li>
                      <li>
                        <a href="#">Đóng góp ý kiến</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="ant-col col-menu col-menu-drawer">
              <div className="noti-group">
                <a href="/login">
                  <Button className="btn btn-danger px-4 rounded" style={{borderRadius:"5px",border:"none", paddingTop: "0.2rem", paddingBottom: "0.2rem" }}>Đăng nhập</Button>
                </a>
              </div>
            </div>
          </div>
      </header>
    </div>
  )
}

export default Navbar