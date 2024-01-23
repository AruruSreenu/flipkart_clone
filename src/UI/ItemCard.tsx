import { ReactNode } from "react";
import "./ItemCard.css";

const ItemCard = ({ children }: { children: ReactNode }) => {
  return <div className="carousel-container">{children}</div>;
};

export default ItemCard;
