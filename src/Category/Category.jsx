const Category = ({ category }) => {
  console.log(category);
  const { availability, category_name, logo } = category;
  return (
    <div className="primary-bg p-10 rounded-lg ">
     <div className="bg w-max p-4 ">
     <img src={logo} />
     </div>
     
     <h3 className="text-[#474747] text-xl font-extrabold mt-8">{category_name}</h3>
      <p className="font-medium text-base text-[#A3A3A3] mt-2 ">{availability}</p>
    </div>
  );
};

export default Category;
