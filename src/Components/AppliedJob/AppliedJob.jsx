import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="p-7 mb-6 rounded-lg border grid grid-cols-5">
      <div className="min-h-[240px] max-w-[240px] flex bg-slate-200 rounded-lg p-5 justify-center items-center flex-1">
        <figure>
          <img src={logo} alt="" />
        </figure>
      </div>
      <div className="col-span-4 self-center">
        <div className=" card-compact bg-base-100 rounded-md flex items-center">
          <div className="card-body ">
            <h2 className="card-title text-[#474747] text-xl">{job_title}</h2>
            <p className="flex items-center gap-2 text-lg text-[#757575] font-semibold">
              {company_name}
            </p>
            <div className="flex gap-3">
              <button className="px-5 py-2 primary-text border rounded-md font-extrabold border-[#7E90FE]">
                {remote_or_onsite}
              </button>
              <button className="px-5 py-2 primary-text border rounded-md font-extrabold border-[#7E90FE]">
                {job_type}
              </button>
            </div>
            <div className="flex gap-6">
              <h3 className="flex items-center gap-2 text-lg text-[#757575] font-semibold">
                <CiLocationOn className="text-2xl " /> {location}
              </h3>
              <h3 className="flex items-center gap-2 text-lg text-[#757575] font-semibold">
                <HiOutlineCurrencyDollar className="text-2xl " />
                Salary : {salary}
              </h3>
            </div>
          </div>
          <div>
            <Link to={`/job/${id}`}>
              <button className="btn hover:bg-[#8a68e8]  bg-[#9873FF] text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
