import { FcCalendar ,FcAbout} from "react-icons/fc";
import { TbCategory2 } from 'react-icons/tb'
function MenuBar() {
  return (
    <div className="menu-bar">
      <div>
        <a href="/calendar">
          <FcCalendar /> Calendar
        </a>
      </div>
      <div>
        <a href="/about">
          <FcAbout /> About
        </a>
      </div>
      <div>
        <a href="/about">
          <TbCategory2 /> Categories
        </a>
      </div>
      

    </div>
  );
}

export default MenuBar;
