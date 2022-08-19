import { useContext, CSSProperties } from "react";
import { ProductContext } from "./ProductCard";
import stylesModules from "../styles/styles.module.css";

export interface Props {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  return (
    <span
      style={style}
      className={`${stylesModules.productDescription} ${className}`}
    >
      {title ? title : product.title}
    </span>
  );
};
