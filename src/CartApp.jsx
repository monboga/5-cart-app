import { NavBar } from "./components/NavBar";
import { useItemsCart } from "./hooks/useItemsCart";
import { CartRoutes } from "./routers/CartRoutes";

export const CartApp = () => {
  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } =
    useItemsCart();
  return (
    <>
      <NavBar />

      <div className="container my-4">
        {/* cada columna es un producto */}

        <h1>Cart App</h1>

        <CartRoutes
          cartItems={cartItems}
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProductCart={handlerDeleteProductCart}
        />

        {/* primer componente */}
      </div>
    </>
  );
};
