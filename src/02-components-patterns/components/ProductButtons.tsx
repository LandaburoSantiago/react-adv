import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";
import stylesModules from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter } = useContext(ProductContext);
  return (
    <div
      className={`${stylesModules.buttonsContainer} ${className}`}
      style={style}
    >
      <button
        onClick={() => increaseBy(-1)}
        className={stylesModules.buttonMinus}
      >
        -
      </button>
      <div className={stylesModules.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(+1)}
        className={stylesModules.buttonAdd}
      >
        +
      </button>
    </div>
  );
};
