import React, { useEffect, useState } from "react";
import Container from "./Container";
import Category from "./Category";
import { categoryApi } from "../api/category";

const CategoryGroup = () => {
    const [categories, setCategories] = useState([]);

    const [ready, setReady] = useState(false);

    useEffect(() => {

        const fetchCategory = async () => {
            const res = await categoryApi.get("/");
            setCategories(res.data);
            setReady(true);
        }
        fetchCategory();
    }, [])
    return (
        <div>
            <section className="category-list py-3 mb-10">
                <Container>
                    <p className="font-heading mb-2">Product Categories</p>
                    <div
                        id="categoryList"
                        className="flex select-none gap-4 overflow-x-scroll whitespace-nowrap"
                    >
                        <Category catName="All" />
                        {!ready && <div className="flex gap-3 animate-pulse">
                            <button className="border border-neutral-200 px-4 py-1 flex items-center">
                                <span className="inline-block bg-neutral-200 w-24 h-4" />
                            </button>
                            <button className="border border-neutral-200 px-4 py-1 flex items-center">
                                <span className="inline-block bg-neutral-200 w-24 h-4" />
                            </button>
                            <button className="border border-neutral-200 px-4 py-1 flex items-center">
                                <span className="inline-block bg-neutral-200 w-24 h-4" />
                            </button>
                            <button className="border border-neutral-200 px-4 py-1 flex items-center">
                                <span className="inline-block bg-neutral-200 w-24 h-4" />
                            </button>

                        </div>
                        }

                        {ready && categories.map((category, index) => <Category key={index} catName={category} />)}
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default CategoryGroup;
