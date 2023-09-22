const Banner2 = ({ job_title }) => {
  return (
    <div className="grid grid-cols-3  -z-10 relative ">
      <div className="w-full hidden md:flex justify-start ">
        <img src={"../../../public/assets/images/bg1.png"} />
      </div>
      <h2 className="text-center m-[-19px]  font-extrabold text-3xl py-32 ">
        {job_title}
      </h2>
      <div className="md:flex justify-end right-0 hidden w-full absolute  -top-[140px]">
        <img src={"../../../public/assets/images/bg2.png"} />
      </div>
    </div>
  );
};

export default Banner2;
