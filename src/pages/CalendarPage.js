import Calendar from "../components/calendar/Calendar";
import UseTaskContext from "../hooks/use-task-context";

function CalenadarPage () {
    const {navigate} = UseTaskContext();
    const handleClick = (e) => {
        e.preventDefault();
    
        navigate('/calendar');
      };



    return <Calendar  onClick={handleClick} />

}

export default CalenadarPage;