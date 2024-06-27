import React, { useEffect, useState } from "react";
import { productApi } from "../api/product";
import Product from "./Product";

const Category = ({ catName }) => {
    return (
        <button className="category-btn border border-neutral-600 px-4 py-1">
            {catName}
        </button>
    );
};

export default Category;
