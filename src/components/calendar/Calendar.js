import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as bootstrap from "bootstrap";
import "./calendar.css";
import UseTaskContext from "../../hooks/use-task-context";
import { useState } from "react";
import AddTask from "../addTask/AddTask";

function CalendarView() {
  const [addForm, setAddForm] = useState({ isOpen: false, data: "" });
  const { taskList } = UseTaskContext();
  const myEvents = taskList.map((task) => {
    return {
      title: task.value,
      date: task.date,
      id: task.id,
      detail: task.detail,
    };
  });

  const handleDateClick = (arg) => {
    setAddForm({ isOpen: true, data: arg.dateStr });
  };

  return (
    <div className="right__container calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={myEvents}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        dateClick={handleDateClick}
        eventDidMount={(info) => {
          return new bootstrap.Popover(info.el, {
            title: info.event.title,
            placement: "bottom",
            trigger: "hover",
            content: info.event.extendedProps.detail,
            template:
              '<div class="popover"><div class="popover-header"></div><div class="popover-body"></div>',
          });
        }}
      />
      {addForm.isOpen && <AddTask calendarDate={addForm.data} />}
    </div>
  );
}

export default CalendarView;
