import { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {

    const [cartDrawer, setCartDrawer] = useState(false);
    const [carts, setCarts] = useState([]);

    const [cartBtnInfo, setCartBtnInfo] = useState({});

    const addCart = (newCart) => {
        setCarts([...carts, newCart]);
    }

    const removeCarts = (product_id) => setCarts(carts.filter((cart) => cart.product_id != product_id))

    const updateCarts = (product_id, addQuantity) => {
        setCarts(carts.map((el) => {

            if (el.product_id === product_id) {

                const newQuantity = el.quantity + addQuantity;
                const newCost = el.price * newQuantity;

                return {
                    ...el,
                    quantity: newQuantity,
                    cost: newCost
                }
            }

            return el;
        }))
    }


    const toggleCartDrawer = () => setCartDrawer(!cartDrawer);

    return (
        <DataContext.Provider value={{ cartDrawer, toggleCartDrawer, carts, setCarts, addCart, cartBtnInfo, setCartBtnInfo, removeCarts, updateCarts }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;