import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { ArrowProps } from "../Type/ReactTupe";
import "../../Styles/CarouselButton.css";

export const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button className="next-arrow carousel-arrow" onClick={onClick}>
    <BiChevronRight
      style={{ width: "23px", height: "23px", color: "#898989" }}
    />
  </button>
);

export const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button className="prev-arrow carousel-arrow" onClick={onClick}>
    <BiChevronLeft
      style={{ width: "23px", height: "23px", color: "#898989" }}
    />
  </button>
);
