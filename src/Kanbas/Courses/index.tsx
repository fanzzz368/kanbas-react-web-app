import { courses } from "../../Kanbas/Database";
import { useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  Link,
  useLocation,
} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import "./index.css";
import { FaChevronRight, FaGlasses, FaChevronDown } from "react-icons/fa";
import KanbasNavigation from "../Navigation";
function Courses({ courses }: { courses: any[] }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation();
  const [isDropdownOpenKanbas, setIsDropdownOpenKanbas] = useState(false);
  const [isDropdownOpenCourse, setIsDropdownOpenCourse] = useState(false);

  const getPageName = () => {
    const path = location.pathname;
    const route = path ? path.split("/").pop() : " ";

    return route ? route.charAt(0).toUpperCase() + route.slice(1) : "";
  };
  return (
    <div className="class-container">
      <div className="col-12 wd-header-column">
        <div>
          <h1 className="course-header">
            <div
              className="course-header-bar"
              onClick={() => setIsDropdownOpenKanbas(!isDropdownOpenKanbas)}
            >
              <HiMiniBars3 />
            </div>
          </h1>
        </div>
        <div>
          <h1 className="course-header">
            <div>
              {course?.number} {course?.shortenTerm}{" "}
              <FaChevronRight className="chevron-right" />
              <Link className="header-home" to={getPageName()}>
                {" "}
                {getPageName()}
              </Link>
            </div>
          </h1>
        </div>
        <h3 className="wd-course-navigation-chevron">
          <FaGlasses className="glasses" />
          <p className="d-inline-flex ">
            <h3
              className="course-navigation-dropdown"
              onClick={() => setIsDropdownOpenCourse(!isDropdownOpenCourse)}
            >
              <FaChevronDown className="chevron-down" />
            </h3>
          </p>
        </h3>

        {isDropdownOpenKanbas && (
          <div className="dropdown-menu-kanbas-nav">
            <KanbasNavigation />
          </div>
        )}

        {isDropdownOpenCourse && (
          <div className="dropdown-menu-course-nav">
            <CourseNavigation />
          </div>
        )}
      </div>

      <hr />
      <div className="main-content">
        <div className="d-none d-md-block col-md-2">
          <CourseNavigation />
        </div>
        <div className="col-12 col-lg-8 col-xl-10">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
