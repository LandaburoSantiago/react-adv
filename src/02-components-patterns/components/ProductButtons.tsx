import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import stylesModules from "../styles/styles.module.css";

export const ProductButtons = () => {
  const { increaseBy, counter } = useContext(ProductContext);
  return (
    <div className={stylesModules.buttonsContainer}>
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
