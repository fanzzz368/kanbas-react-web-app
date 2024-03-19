import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div className="module-list-container">
      <div className="wd-modules-buttons-container">
        <button className="wd-buttons module-collapse-button">Collapse All</button>
        <button className="wd-buttons module-progress-button">View Progress</button>
        <select className="wd-buttons module-publish-button"><option> Publish All </option></select>
        <button className="wd-buttons module-module-button">+ Module</button>
        <button className="wd-buttons module-ellipsis-button">⋮</button>
      </div>
      {/* <div> */}
        <ul className="list-group wd-modules">
        <li className="list-group-item">
        <button 
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button 
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input value={module.name}
          onChange={(e) => 
            dispatch(setModule({ ...module, name: e.target.value }))
          } />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        /> 
         {/* adjust the location of this later */}
      </li>
          {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <button
                onClick={() => dispatch(setModule(module))}>
              Edit
            </button>


              {module.name}
              <p>{module.description}</p>
              <p>{module._id}</p>
              
              {/* <div className="module-container">
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div> */}

              {/* {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span> */}



                    </li>
                  ))}
                </ul>
              {/* )} */}
            {/* </li> */}
          {/* ))} */}
        {/* </ul> */}
      {/* </div> */}
    </div>
  );
}
export default ModuleList;