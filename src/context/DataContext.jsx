import { createContext, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {

    const [cartDrawer, setCartDrawer] = useState(false);
    const [carts, setCarts] = useState([]);

    const [cartAdded, setCartAdded] = useState(false);
    const [addedProducts, setAddedProducts] = useState({})

    const [cartBtnInfo, setCartBtnInfo] = useState({});

    const [currentCategory, setCurrentCategory] = useState('All');
    const [searchKeyword, setSearchKeyword] = useState('');


    const addCart = (newCart) => {
        setCarts([...carts, newCart]);
        setAddedProducts((prev) => ({ ...prev, [newCart.product_id]: true }));
    };

    const removeCarts = (product_id) => {
        setCarts((prevCarts) => prevCarts.filter((cart) => cart.product_id != product_id));
        setAddedProducts((prev) => ({ ...prev, [product_id]: false }));
    }

    const updateCarts = (product_id, addQuantity) => {
        setCarts(
            carts.map((el) => {
                if (el.product_id === product_id) {
                    const newQuantity = el.quantity + addQuantity;
                    const newCost = el.price * newQuantity;

                    return {
                        ...el,
                        quantity: newQuantity,
                        cost: newCost,
                    };
                }

                return el;
            })
        );
    };

    const toggleCartDrawer = () => setCartDrawer(!cartDrawer);

    return (
        <DataContext.Provider
            value={{
                cartDrawer,
                toggleCartDrawer,
                carts,
                setCarts,
                addCart,
                addedProducts,
                setAddedProducts,
                cartBtnInfo,
                setCartBtnInfo,
                removeCarts,
                updateCarts,
                currentCategory,
                setCurrentCategory,
                searchKeyword,
                setSearchKeyword
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
