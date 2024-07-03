import React, { useRef, useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [isVisible, setIsVisible] = useState(false);
    const searchBarInputRef = useRef(null);

    const toggleSearchBar = () => {
        setIsVisible(!isVisible);
        if (!isVisible) {
            setTimeout(() => {
                searchBarInputRef.current.focus();
            }, 300);
        }
    };

    const handleSearchInput = (event) => {
        const keyword = event.target.value.toLowerCase();
        onSearch(keyword);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          toggleSearchBar();
        }
      };

    const clearSearchInput = () => {
        searchBarInputRef.current.value = "";
        onSearch("");
    };

    return (
        <div className="control-btn flex gap-3">
            <div
                className={`border border-neutral-600 h-12 w-60 flex gap-3 items-center px-3 transition-transform duration-300 ${isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-full"
                    }`}
            >
                <input
                    ref={searchBarInputRef}
                    onChange={handleSearchInput}
                    onKeyDown={handleKeyDown}
                    type="text"
                    className="flex-grow focus-visible:outline-none"
                />
                <button onClick={clearSearchInput}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 stroke-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                        />
                    </svg>
                </button>
            </div>
            <button
                onClick={toggleSearchBar}
                className="border border-neutral-600 duration-100 active:scale-90 w-12 h-12 flex justify-center items-center"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 stroke-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;
