import { useEffect, useState } from "react";
import Category from "../../Category/Category";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h2 className=" text-5xl font-extrabold ">Job Category List</h2>
        <p className="font-semibold mt-4 mb-8 text-base">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        {categories.map((category, idx) => (
          <Category key={idx} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
