import "./blueNavContainer.css";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const BlueNavContainer = ({ children }: Props) => {
  return <div className="cart-nav-1-container">{children}</div>;
};

export default BlueNavContainer;
