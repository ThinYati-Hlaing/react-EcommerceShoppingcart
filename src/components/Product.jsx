import React, { useContext, useEffect, useRef, useState } from "react";
import StarRating from "./StarRating";
import { DataContext } from "../context/DataContext";
// import AnimatedImage from './AnimatedImage';

const Product = ({
    product: {
        id,
        title,
        price,
        image,
        rating: { rate, count },
        description,
        category,
    },
}) => {
    const { addCart, cartAdded, setCartAdded, addedProducts } = useContext(DataContext);
    // const [animate, setAnimate] = useState(false);
    // const [ready, setReady] = useState("");

    // const handleAddToCart = () => {
    //         const newCart = {
    //             product_id: id,
    //             title,
    //             price,
    //             image,
    //             quantity: 1,
    //             cost: price,
    //     } 
    //     addCart(newCart)
    //     setReady(true)
    //     if(ready){
    //         setCartAdded(true)
    //     }

    const handleAddToCart = () => {

        const newCart = {
            product_id: id,
            title,
            price,
            image,
            quantity: 1,
            cost: price,
        }
        addCart(newCart);
    }

    // const [info, setInfo] = useState({});

    // const imgRef = useRef();

    // useEffect(() => {
    //     setInfo(imgRef.current.getBoundingClientRect())

    // }, [])

    return (
        <div className="product-card group">
            <img
                src={image}
                className="product-card-img group-hover:-rotate-6 duration-300 transition-transform h-32 -mb-16 ms-5"
            />
            {/* {animate && <AnimatedImage src={image} info={info} setAnimate={setAnimate} />} */}
            <div className="border border-neutral-600 p-5">
                <p className="product-card-title font-heading font-bold line-clamp-1 text-xl mb-2 mt-12">
                    {title}
                </p>
                <p className="product-card-description text-neutral-500 text-sm line-clamp-3 mb-4">
                    {description}
                </p>
                <div className="rating border-b border-neutral-600 pb-3 mb-3 flex justify-between">
                    <div className="rating-stars flex">
                        <StarRating rate={rate} />
                    </div>
                    <p className="rating-text">
                        ({rate} / {count})
                    </p>
                </div>
                <p className="product-card-price font-heading font-bold text-xl mb-3">
                    $ <span className="price">{price}</span>
                </p>
                <button
                    disabled={addedProducts[id]}
                    onClick={handleAddToCart}
                    // className={`border border-neutral-600 block font-heading w-full h-12 duration-100 active:scale-90 ${ready ? (cartAdded ? "bg-neutral-600 text-white" : "bg-white text-black") : "bg-white text-black"
                    //     }`}
                    className={`border border-neutral-600 block font-heading w-full h-12 duration-100 active:scale-90 ${addedProducts[id] ? "bg-neutral-600 text-white" : "bg-white text-black"
                        }`}
                // className={` ${ added && " bg-neutral-600 text-white"
                //     } disabled:pointer-events-none select-none duration-100 active:scale-90 border border-neutral-600 block font-heading w-full h-12`}
                >
                    {/* {ready ? (cartAdded ? "Added" : "Add to Cart") : "Add to Cart"} */}
                    {addedProducts[id] ? "Added" : "Add to Cart"}                </button>

            </div>
        </div>
    );
};

export default Product;
