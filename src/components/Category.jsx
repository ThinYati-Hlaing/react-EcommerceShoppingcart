import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";


const Category = ({ catName }) => {

    const {setCurrentCategory} = useContext(DataContext);

    return (
        <button onClick={() => setCurrentCategory(catName)}  className="category-btn border border-neutral-600 px-4 py-1">
            {catName}

        </button>
    );
};

export default Category;
