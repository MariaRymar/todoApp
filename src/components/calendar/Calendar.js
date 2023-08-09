import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";

function CalendarView() {
  const { taskList } = useSelector((state) => {
    return state.tasks;
  });
  console.log(taskList);
  const myEvents = taskList.map((task) => {
    return { title: task.value, date: task.date };
  });

  const handleDateClick = (arg) => {
    // console.log(arg.dateStr);
  };
  return (
    <div className="index-route">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        dateClick={handleDateClick}
        initialView="dayGridMonth"
        events={myEvents}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventAdd={(e) => console.log(e)}
      />
    </div>
  );
}

export default CalendarView;
