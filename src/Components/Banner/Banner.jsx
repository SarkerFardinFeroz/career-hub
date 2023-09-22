const Banner = () => {
  return (
    <div className="lg:flex container mx-auto  justify-between">
      <div >
        <h3 className="lg:w-[570px] md:text-[80px] font-extrabold">
          One Step Closer To Your
          <span className="primary-text"> Dream Job</span>
        </h3>
        <p className="text-[#757575] py-6 md:w-[519px] text-lg">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="rounded-xl primary-color text-white text-xl px-7 py-5 font-extrabold capitalize">
          Get Started
        </button>
      </div>
      <img src="./assets/images/user.png" />
    </div>
  );
};

export default Banner;
