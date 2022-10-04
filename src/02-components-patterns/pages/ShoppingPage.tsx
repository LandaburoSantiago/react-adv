import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <>
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              onChange={(evento) => onProductCountChange(evento)}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          </>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <>
            <ProductCard
              key={key}
              product={product}
              style={{ width: "100px" }}
              className="bg-dark text-white"
              value={product.count}
              onChange={(evento) => onProductCountChange(evento)}
            >
              <ProductImage className="custom-image" />
              <ProductButtons
                className="custom-buttons"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </ProductCard>
          </>
        ))}
      </div>
    </div>
  );
};
