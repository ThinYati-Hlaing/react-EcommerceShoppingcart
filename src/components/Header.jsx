import React, { useContext, useEffect, useRef } from 'react'
import Container from './Container'
import { DataContext } from '../context/DataContext'
import SearchBar from './SearchBar';


const Header = () => {

    const { toggleCartDrawer, carts, setCartBtnInfo,currentCategory,setSearchKeyword } = useContext(DataContext);

    const cartBtnRef = useRef();

    // useEffect(() => {
    //     setCartBtnInfo(cartBtnRef.current.getBoundingClientRect())
    // }, [])
    return (
        <header className="border-b-2 z-40 fixed w-full bg-white border-neutral-600">
            <Container>
                <div className="flex justify-between items-center py-3">
                    <div className="brand">
                        <h1 className="font-heading font-bold tracking-wider text-3xl">Shopping Cart</h1>
                    </div>
                    <div className="control-btn flex gap-3">
                        <SearchBar />
                        <button ref={cartBtnRef} onClick={toggleCartDrawer} className="border duration-100 active:scale-90 relative animate__animated border-neutral-600 bg-neutral-600 w-12 h-12 flex justify-center items-center" id="cartBtn">
                            <span id="cartCountBadge" className="absolute bg-red-500 text-white w-6 h-6 text-xs right-0 top-0 translate-x-1/2 -translate-y-1/2 rounded-full flex justify-center items-center border-2 border-white"> {carts.length} </span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 stroke-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>
                    </div>
                </div>

            </Container>
        </header>
    )
}

export default Header