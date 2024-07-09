import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";


const Category = ({ catName:{name} }) => {

    const {setCurrentCategory} = useContext(DataContext);

    return (
        <button onClick={() => setCurrentCategory(name)}  className="category-btn border border-neutral-600 px-4 py-1">
            {name}

        </button>
    );
};

export default Category;
