import { CiLocationOn } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
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
    <div className="card-body card-compact  border  shadow-sm">
      <figure className="mb-8">
        <img src={logo} />
      </figure>
      <div>
        <h2 className="card-title font-extrabold text-[#474747] text-2xl">
          {job_title}
        </h2>
        <p className="text-start">{company_name}</p>
        <div className="flex gap-4 my-4 ">
          <button className="px-5 py-2 primary-text border rounded-md font-extrabold border-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 primary-text border rounded-md font-extrabold border-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-6 w-max">
          <p className="flex items-center gap-2">
            <CiLocationOn className="text-2xl " /> {location}
          </p>
          <p className="flex items-center gap-2">
            <HiOutlineCurrencyDollar className="text-2xl " />
            Salary : {salary}
          </p>
        </div>
        <div className="card-actions mt-6 justify-center md:justify-start">
          <Link to={`/job/${id}`}>
            <button className="rounded-md primary-color text-white text-xl px-4 py-2 font-extrabold capitalize">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
