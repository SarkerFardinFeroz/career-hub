import { useEffect, useState } from "react";
import Category from "../../Category/Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const asyncFunc = async () => {
      const res = await fetch("./categories.json");
      const data = await res.json();
      setCategories(data)
    };
    asyncFunc()
  }, []);
  return (
    <div className="mb-32">
      <div className="text-center">
        <h2 className=" text-5xl font-extrabold ">Job Category List</h2>
        <p className="font-semibold mt-4 mb-8 text-base">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, idx) => (
          <Category key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
