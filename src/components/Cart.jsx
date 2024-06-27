import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Swal from 'sweetalert2';

const Cart = ({ cart: { product_id, image, title, price, quantity, cost } }) => {

    const { removeCarts, updateCarts } = useContext(DataContext);

    const handleRemoveCarts = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                removeCarts(product_id);
                Swal.fire({
                title: "Deleted!",
                text: "Your List has been deleted.",
                icon: "success"
              });
            }
          });
      
    }
    return (
        <div className="cart-item group">
            <div className="w-full mb-5">
                <img className="cart-item-img h-16 -mb-8 ms-3 relative z-10" src={image} />
                <div className="border bg-white border-neutral-600 p-3 relative">
                    <button onClick={handleRemoveCarts} className="cart-item-del absolute bg-red-100 text-red-600 top-3 -right-3 p-1 opacity-0 group-hover:opacity-100 group-hover:right-3 duration-300 pointer-events-none group-hover:pointer-events-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 pointer-events-none">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </button>
                    <p className="cart-item-title font-heading line-clamp-1 font-bold mt-8 mb-3">{title}</p>
                    <div className="flex justify-between">
                        <p className="text-neutral-500 font-san">
                            $ <span className="cart-item-price hidden">{price}</span>
                            <span className="cart-item-cost">{cost}</span>
                        </p>
                        <div className="flex">
                            <button onClick={() => quantity > 1 && updateCarts(product_id, -1)} className="bg-neutral-300 duration-100 active:scale-90 p-1 cart-item-quantity-decrement">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 pointer-events-none">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </button>
                            <p className="cart-item-quantity w-8 text-end bg-neutral-200 pe-1">
                                {quantity}
                            </p>
                            <button onClick={() => updateCarts(product_id, 1)} className="bg-neutral-300 duration-100 active:scale-90 p-1 cart-item-quantity-increment">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 pointer-events-none">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Cart