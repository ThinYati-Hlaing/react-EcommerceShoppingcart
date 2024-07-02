import React from "react";

const Category = ({ catName, setCurrentCategory }) => {

    return (
        <button onClick={() => setCurrentCategory(catName)}  className="category-btn border border-neutral-600 px-4 py-1">
            {catName}

        </button>
    );
};

export default Category;
