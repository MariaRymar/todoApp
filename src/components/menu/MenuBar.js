import { FcCalendar, FcAbout } from "react-icons/fc";
import { TbCategory2 } from "react-icons/tb";
import UseTaskContext from "../../hooks/use-task-context";
import { BiCheckbox } from "react-icons/bi";
import { TbCheckbox } from "react-icons/tb";
import { FiTrash } from "react-icons/fi";
import AddCategory from "./AddCategory";
import Link from "../routing/Link";
import "./menu.css";
import { useSelector, useDispatch } from "react-redux";
import { changeChosenCategory } from "../../store";
import {
  useFetchCategoriesQuery,
  useDeleteCategoryMutation,
} from "../../store";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function MenuBar() {
  const { currentPath } = UseTaskContext();

  const menuDispatch = useDispatch();
  const { data, error, isLoading } = useFetchCategoriesQuery();

  const [deleteCategory, results] = useDeleteCategoryMutation();

  const { chosenCategory, taskList } = useSelector((state) => {
    return state.tasks;
  });

  const handleDeleteCategory = (category, event) => {
    event.stopPropagation();
    deleteCategory(category.id);
  };
  const handleChangeChosenCategory = (mapCategoryValue) => {
    menuDispatch(changeChosenCategory(mapCategoryValue));
  };

  let menuContent = (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        0: {
          slidesPerView: 4,
        },
        576: {
          // width: 576,
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      }}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );

  if (!error || !isLoading) {
    menuContent = (
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        breakpoints={{
          0: {
            slidesPerView: 4,
            spaceBetween: 0.5
          },
  
          576: {
  
            slidesPerView: 4,
            spaceBetween: 1,

          },
          768: {
            slidesPerView: 4,
            spaceBetween: 6,
          },

        }}
        className="mySwiper menubar__buttons__container"
      >
        {data &&
          data
            .filter((category) => category.value !== "completed")
            .map((mapCategory) => {
              return (
                <SwiperSlide
                  onClick={() => handleChangeChosenCategory(mapCategory.value)}
                  key={mapCategory.id}
                >
                  <div
                    className={`bar-button__container ${
                      currentPath === "/" &&
                      chosenCategory.toLowerCase() ===
                        mapCategory.value.toLowerCase()
                        ? "active"
                        : ""
                    }`}
                  >
                    <BiCheckbox style={{ color: `${mapCategory.color}` }} />
                    <div>{mapCategory.label === 'All Tasks' ? 'All' : `${mapCategory.value}`} </div>
                  </div>
                </SwiperSlide>
              );
            })}
      </Swiper>
    );
  }

  return (
    <div className="menu-bar">
      <Link to="/">
        {/* <div className='flex'> */}
        {menuContent}
        {/* </div> */}
      </Link>
    </div>
  );
}

export default MenuBar;
