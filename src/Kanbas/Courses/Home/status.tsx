import {
  FaBan,
  FaCheckCircle,
  FaFileImport,
  FaArrowRight,
  FaRegDotCircle,
  FaRegChartBar,
  FaBullhorn,
  FaRegBell,
  FaCalendar,
} from "react-icons/fa";
import "./index.css";
import "./status.css";
function Status() {
  return (
    <div className="d-none d-xl-block col-xl-2">
      <br />
      <h6>Course Status</h6>
      <button className="wd-buttons status-unpublish-button">
        <FaBan /> Unpublish
      </button>
      <button className="wd-buttons status-published-button">
        <FaCheckCircle /> Published
      </button>
      <br />

      <div className="wd-status-buttons-container">
        <button className="wd-buttons status-import-existing-button">
          <FaFileImport /> Import Existing Content
        </button>
        <br />
        <button className="wd-buttons status-import-commons-button">
          <FaArrowRight /> Import from Commons
        </button>
        <br />
        <button className="wd-buttons status-choose-home-page-button">
          <FaRegDotCircle /> Choose Home Page
        </button>
        <br />
        <button className="wd-buttons status-view-course-stream-button">
          <FaRegChartBar /> View Course Stream
        </button>
        <br />
        <button className="wd-buttons status-new-announcement-button">
          <FaBullhorn /> New Announcement
        </button>
        <br />
        <button className="wd-buttons status-new-analytics-button">
          <FaRegChartBar /> New Analytics
        </button>
        <br />
        <button className="wd-buttons status-view-course-notifs-button">
          <FaRegBell /> View Course Notifications
        </button>
      </div>

      <h6 className="status-todo">To Do</h6>
      <hr />
      <ol className="status-coming-up-events">
        <li className="status-event-list">
          <div className="status-entire-event">
            <div className="status-exit">&#10005;</div>
            <div className="status-todo-number">&#9312; </div>
            <div className="status-event">
              <p className="status-coming-up-event title">
                Grade A1 - ENV + HTML
              </p>
              <p className="status-coming-up-event date">
                100 points &#8226; Jan 10 at 11:59pm
              </p>
            </div>
          </div>
        </li>
      </ol>

      <div className="status-coming-up">
        <div>
          <h6 className="status-coming-up-header">Coming Up</h6>
        </div>
        <div>
          <FaCalendar />
          View Calendar
        </div>
      </div>

      <hr className="status-coming-up-line" />
      <ol className="status-coming-up-events">
        <li className="status-event-list">
          <div className="status-entire-event">
            <div className="status-calendar">
              <FaCalendar className="calendar" />{" "}
            </div>
            <div className="status-event">
              <p className="status-coming-up-event title">Lecture</p>
              <p className="status-coming-up-event section">
                CS1234.31816.202430
              </p>
              <p className="status-coming-up-event date">Jan 06 at 11:45am</p>
            </div>
          </div>
        </li>
        <li className="status-event-list">
          <div className="status-entire-event">
            <div className="status-calendar">
              <FaCalendar className="calendar" />{" "}
            </div>
            <div className="status-event">
              <p className="status-coming-up-event title">
                CS1234 SP24 Lecture
              </p>
              <p className="status-coming-up-event section">
                CS1234.31816.202430
              </p>
              <p className="status-coming-up-event date">Jan 06 at 6:50pm</p>
            </div>
          </div>
        </li>
        <li className="status-event-list">
          <div className="status-entire-event">
            <div className="status-calendar">
              <FaCalendar className="calendar" />{" "}
            </div>
            <div className="status-event">
              <p className="status-coming-up-event title">
                CS1234 SP24 Lecture
              </p>
              <p className="status-coming-up-event section">
                CS1234.31816.202430
              </p>
              <p className="status-coming-up-event date">Jan 06 at 9:00pm</p>
            </div>
          </div>
        </li>
      </ol>
      <p className="status-more-text">12 more in the next week ...</p>
    </div>
  );
}
export default Status;
