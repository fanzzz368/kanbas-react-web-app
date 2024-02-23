import ModuleList from "../Modules/List";
import Status from "./status";
import './index.css';
function Home() {
  return (
    <div className="home">
      <div className="col-12 col-lg-11 col-xl-10">
        <ModuleList />
      </div>
      <Status />
    </div>
  );
}
export default Home;