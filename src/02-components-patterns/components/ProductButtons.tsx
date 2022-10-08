import { useContext, CSSProperties, useCallback } from "react";
import { ProductContext } from "./ProductCard";
import stylesModules from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

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
        className={`${stylesModules.buttonAdd} ${
          isMaxReached() && stylesModules.disabled
        }`}
      >
        +
      </button>
    </div>
  );
};
