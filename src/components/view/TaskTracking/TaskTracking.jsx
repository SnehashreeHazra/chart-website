import React, { useState, useEffect } from "react";
import { DndContext, closestCenter, DragOverlay } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import "./TaskTracking.css";
import group_img from "../../../Images/group-img.png";
import file_four_img from "../../../Images/file-4.png";
import footer_four from "../../../Images/footer-4.png";
import number_two from "../../../Images/number-2.png";
import number_three from "../../../Images/number-3.png";
import number_four from "../../../Images/number-4.png";

function TaskTracking() {
  const initialTasks = {
    pending: [
      { id: "1", title: "Dhalai (District Tripura)", desc: "Road Construction" },
      { id: "2", title: "Gomati (District Tripura)", desc: "Pipeline" },
      { id: "3", title: "North Tripura (District Tripura)", desc: "Pipeline" },
      { id: "4", title: "Khowai (District Tripura)", desc: "Tourism Model" },
    ],
    ongoing: [
      { id: "5", title: "Sepahijala (District Tripura)", desc: "Road Construction" },
      { id: "6", title: "South Tripura (District Tripura)", desc: "Pipeline" },
      { id: "7", title: "Unakoti (District Tripura)", desc: "Tourism Model" },
    ],
    developmentDone: [
      { id: "8", title: "West Tripura (District Tripura)", desc: "Road Construction" },
      { id: "9", title: "North Tripura (District Tripura)", desc: "Pipeline" },
      { id: "10", title: "Unakoti (District Tripura)", desc: "Tourism Model" },
    ],
    completed: [
      { id: "11", title: "Unakoti (District Tripura)", desc: "Road Construction" },
      { id: "12", title: "North Tripura (District Tripura)", desc: "Pipeline" },
    ],
  };

  // Load tasks from local storage or use initial state
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });

  const [activeItem, setActiveItem] = useState(null);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDragStart = (event) => {
    const { active } = event;
    const category = findCategory(active.id);
    const item = tasks[category].find((task) => task.id === active.id);
    setActiveItem(item);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveItem(null);

    if (!over || active.id === over.id) return;

    const sourceCategory = findCategory(active.id);
    const destinationCategory = findCategory(over.id);

    if (sourceCategory && destinationCategory) {
      const sourceItems = [...tasks[sourceCategory]];
      const destinationItems = [...tasks[destinationCategory]];
      const [movedItem] = sourceItems.filter((item) => item.id === active.id);

      if (sourceCategory === destinationCategory) {
        const oldIndex = sourceItems.findIndex((item) => item.id === active.id);
        const newIndex = destinationItems.findIndex((item) => item.id === over.id);
        const reorderedItems = arrayMove(sourceItems, oldIndex, newIndex);

        setTasks({
          ...tasks,
          [sourceCategory]: reorderedItems,
        });
      } else {
        const newSourceItems = sourceItems.filter((item) => item.id !== active.id);
        destinationItems.splice(destinationItems.findIndex((item) => item.id === over.id), 0, movedItem);

        setTasks({
          ...tasks,
          [sourceCategory]: newSourceItems,
          [destinationCategory]: destinationItems,
        });
      }
    }
  };

  const findCategory = (id) => {
    return Object.keys(tasks).find((key) => tasks[key].some((task) => task.id === id));
  };

  const renderCategory = (category, heading, numberImg) => (
    <SortableContext items={tasks[category]} strategy={verticalListSortingStrategy}>
      <div className="small-boxes-wrapper">
        <div className="wrapper-heading">
          <h2>{heading}</h2>
          <img src={numberImg} alt="" />
        </div>
        {tasks[category].map((task) => (
          <SortableItem key={task.id} id={task.id} task={task} />
        ))}
      </div>
    </SortableContext>
  );

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="task-container">
        <div className="task-content">
          <h2 className="task-module-heading">Task Management</h2>
          <div className="boxes-wrapper">
            {renderCategory("pending", "Pending", number_four)}
            {renderCategory("ongoing", "Ongoing", number_three)}
            {renderCategory("developmentDone", "Development Done", number_three)}
            {renderCategory("completed", "Completed", number_two)}
          </div>
        </div>
      </div>

      <DragOverlay>
        {activeItem ? (
          <div className="small-box active-drag">
            <div className="small-box-heading">
              <h2>{activeItem.title}</h2>
              <img src={file_four_img} alt="" />
            </div>
            <p>{activeItem.desc}</p>
            <div className="img-wrapper">
              <div className="left-img">
                <img src={group_img} alt="" />
              </div>
              <div className="right-img">
                <img src={footer_four} alt="" />
              </div>
            </div>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

function SortableItem({ id, task }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="small-box" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="small-box-heading">
        <h2>{task.title}</h2>
        <img src={file_four_img} alt="" />
      </div>
      <p>{task.desc}</p>
      <div className="img-wrapper">
        <div className="left-img">
          <img src={group_img} alt="" />
        </div>
        <div className="right-img">
          <img src={footer_four} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TaskTracking;
