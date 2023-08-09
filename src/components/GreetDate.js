function GreetDate() {
  const currentDate = new Date();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][currentDate.getDay()];
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ][currentDate.getMonth()];
  const date = currentDate.getDate();
  const currentHour = currentDate.getHours();

  let greeting;
  

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Good morning ☀️";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon 🌤";
  } else {
    greeting = "Good evening 🌚";
  }

  return (
    <div>
      <h1>{greeting}</h1>
      <h2>
        It's {dayOfWeek}, {month} {date}
      </h2>
    </div>
  );
}

export default GreetDate;
