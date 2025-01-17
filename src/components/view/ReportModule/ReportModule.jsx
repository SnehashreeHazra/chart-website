import React, { useState, useEffect } from 'react';
import './ReportModule.css';
import number_three from '../../../Images/number-3.png';
import rajkumar_img from '../../../Images/image.png';
import trishit_img from '../../../Images/trishit-img.png';
import sneha_img from '../../../Images/sneha-img.png';
import rajib_img from '../../../Images/rajib-img.png';
import anushka_img from '../../../Images/anushka-img.png';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { arrayMove } from '@dnd-kit/sortable';

function ReportModule() {
  const initialReports = {
    training: [
      { id: '1', name: 'Rajkumar Mahato', event: 'Event name use Alliteration', image: rajkumar_img },
      { id: '2', name: 'Trishit Majumder', event: "Event name Captain's Course", image: trishit_img },
      { id: '3', name: 'Sneha Das', event: "Event name Captain's Course", image: sneha_img },
    ],
    workshop: [
      { id: '4', name: 'Rajib Das', event: 'Event name Eco-Conscious', image: rajib_img },
      { id: '5', name: 'Anushka Das', event: 'Event name Innovation Ignited', image: anushka_img },
      { id: '6', name: 'Sneha Das', event: "Event name Captain's Course", image: sneha_img },
    ],
    meetings: [
      { id: '7', name: 'Rajkumar Mahato', event: 'Event name use Alliteration', image: rajkumar_img },
      { id: '8', name: 'Trishit Majumder', event: 'Event name use Alliteration', image: trishit_img },
      { id: '9', name: 'Sneha Das', event: 'Event name use Alliteration', image: sneha_img },
    ],
  };

  const [reports, setReports] = useState(() => {
    // Load reports from localStorage or use initialReports
    const savedReports = localStorage.getItem('reports');
    return savedReports ? JSON.parse(savedReports) : initialReports;
  });

  const [activeItem, setActiveItem] = useState(null); // Active item being dragged

  useEffect(() => {
    // Save the reports state to localStorage whenever it changes
    localStorage.setItem('reports', JSON.stringify(reports));
  }, [reports]);

  const handleDragStart = (event) => {
    const { active } = event;
    const category = findCategory(active.id);
    const item = reports[category].find((report) => report.id === active.id);
    setActiveItem(item);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveItem(null); // Reset active item

    if (!over || active.id === over.id) return;

    const sourceCategory = findCategory(active.id);
    const destinationCategory = findCategory(over.id);

    if (sourceCategory && destinationCategory) {
      const sourceItems = [...reports[sourceCategory]];
      const destinationItems = [...reports[destinationCategory]];
      const [movedItem] = sourceItems.filter((item) => item.id === active.id);

      if (sourceCategory === destinationCategory) {
        const oldIndex = sourceItems.findIndex((item) => item.id === active.id);
        const newIndex = destinationItems.findIndex((item) => item.id === over.id);
        const reorderedItems = arrayMove(sourceItems, oldIndex, newIndex);

        setReports({
          ...reports,
          [sourceCategory]: reorderedItems,
        });
      } else {
        const newSourceItems = sourceItems.filter((item) => item.id !== active.id);
        destinationItems.splice(destinationItems.findIndex((item) => item.id === over.id), 0, movedItem);

        setReports({
          ...reports,
          [sourceCategory]: newSourceItems,
          [destinationCategory]: destinationItems,
        });
      }
    }
  };

  const findCategory = (id) => {
    return Object.keys(reports).find((key) => reports[key].some((report) => report.id === id));
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="report-module-content">
        <h2 className="report-module-heading">Reports on Events</h2>
        <div className="report-boxes-wrapper">
          {Object.keys(reports).map((category) => (
            <SortableContext key={category} items={reports[category]} strategy={verticalListSortingStrategy}>
              <div className="report-three-box-wrapper">
                <div className="report-wrapper-heading">
                  <h2>{category}</h2>
                  <img src={number_three} alt="" />
                </div>
                {reports[category].map((report) => (
                  <SortableItem key={report.id} id={report.id} report={report} />
                ))}
              </div>
            </SortableContext>
          ))}
        </div>
      </div>

      {/* Drag Overlay */}
      <DragOverlay>
        {activeItem ? (
          <div className="report-card active-drag">
            <div className="report-img-name">
              <img src={activeItem.image} alt="" />
              <div className="name-info">
                <h2>{activeItem.name}</h2>
                <p>{activeItem.event}</p>
              </div>
            </div>
            <p className="report-card-paragraph">This is a very Beautiful Event. I like this event every time.</p>
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

function SortableItem({ id, report }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="report-card" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className="report-img-name">
        <img src={report.image} alt="" />
        <div className="name-info">
          <h2>{report.name}</h2>
          <p>{report.event}</p>
        </div>
      </div>
      <p className="report-card-paragraph">This is a very Beautiful Event. I like this event every time.</p>
    </div>
  );
}

export default ReportModule;
