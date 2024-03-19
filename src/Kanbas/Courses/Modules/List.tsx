import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules,
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module,
  );
  const dispatch = useDispatch();
  return (
    <div className="module-list-container">
      <div className="wd-modules-buttons-container">
        <button className="wd-buttons module-collapse-button">
          Collapse All
        </button>
        <button className="wd-buttons module-progress-button">
          View Progress
        </button>
        <select className="wd-buttons module-publish-button">
          <option> Publish All </option>
        </select>
        <button className="wd-buttons module-module-button">+ Module</button>
        <button className="wd-buttons module-ellipsis-button">⋮</button>
      </div>

      <button
        className="wd-buttons module-module-button"
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}
      >
        Add
      </button>
      <button
        className="wd-buttons"
        onClick={() => dispatch(updateModule(module))}
      >
        Update
      </button>
      <input
        value={module.name}
        onChange={(e) =>
          dispatch(setModule({ ...module, name: e.target.value }))
        }
      />
      <textarea
        value={module.description}
        onChange={(e) =>
          dispatch(setModule({ ...module, description: e.target.value }))
        }
      />

      <ul className="list-group wd-modules">
        <li className="list-group-item"></li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              {module.name}
              <button
                className="wd-buttons module-module-button"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              <button
                className="wd-buttons module-module-button"
                onClick={() => dispatch(deleteModule(module._id))}
              >
                Delete
              </button>
              <p>{module.description}</p>
              <p>{module._id}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
