import { useEffect, useReducer } from "react";
import { itemsReducer } from "../reducer/itemsReducer";
import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "../reducer/itemsActions";

// || [] muestra un arreglo vacio.
const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];


// funcion de flecha comun y corriente

export const useItemsCart = () => {
    //   const [cartItems, setCartItems] = useState(initialCartItems);
  const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

  //   solucion a que no se cargue al momento de cerrar la sesion
    useEffect(() => {
      //  almacena el objeto convertido en string con JSON
       sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
  
    // recibimos el producto de la funcion addProductCart
    const handlerAddProductCart = (product) => {
      const hasItem = cartItems.find((i) => i.product.id === product.id);
      if (hasItem) {
          dispatch(
              {
                  type: UpdateQuantityProductCart,
                  payload: product,
              }
          );
      } else {
          dispatch(
              {
                  type: AddProductCart,
                  payload: product,
              }
          );
      }
    };
  
  //   funcion que hace que eliminemos objetos del arreglo y de la tabla
    const handlerDeleteProductCart = (id) => {
      dispatch(
          {
              type: DeleteProductCart,
              payload: id,
          }
      );
    };
  
    return {
        cartItems,
        handlerAddProductCart,
        handlerDeleteProductCart,
    }
}