import { Routes, Route } from "react-router-dom";
import Footer from "./Components/layout/Footer";
import Home from "./Components/layout/Home";
import Lotrinh from "./Components/page/Lotrinh";
import Navbar from "./Components/layout/Navbar";
import Slider from "./Components/layout/KhoahocMain";
import VideoMainSlide from "./Components/layout/VideoMainSlide"
import Khoahoc from "./Components/page/Khoahoc";
import Baiviet from "./Components/page/Baiviet";
import CourseDetail from "./Components/page/CourseDetail";


function App() {

  return (
    <>
          <Routes>
          <Route path="/khoahoc/course" element={<CourseDetail />}></Route>
          <Route path="/baiviet" element={<Baiviet />}></Route>
          <Route path="/khoahoc" element={<Khoahoc />}></Route>
          <Route path="/video" element={<VideoMainSlide />}></Route>
          <Route path="/slider" element={<Slider />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/lotrinh" element={<Lotrinh />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/home" element={<Home />}></Route>
          </Routes>
    </>
  )
}

export default App
