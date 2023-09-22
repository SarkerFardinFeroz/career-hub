import {  useLoaderData, useParams } from "react-router-dom";
import Banner2 from "../Banner2/Banner2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localstorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_title,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
  } = job;
  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast.success("Successfully Applied", {
      position: "bottom-center",
    });
  };
  return (
    <div>
      <div className="banner-bg">
        <Banner2 job_title={job_title} />
      </div>
      <div className="grid xl:grid-cols-4 gap-6 container mx-auto my-32 ">
        <div className="col-span-3 space-y-6">
          <p>
            <span className="text-[#1A1919] font-extrabold">
              Job Description:
            </span>
            {job_description}
          </p>
          <p>
            <span className="text-[#1A1919] font-extrabold">
              Job Responsibility:
            </span>
            {job_responsibility}
          </p>
          <p>
            <span className="text-[#1A1919] font-extrabold">
              Educational Requirements:
            </span>
            <br />
            <br />
            {educational_requirements}
          </p>
          <p>
            <span className="text-[#1A1919] font-extrabold">Experiences:</span>
            <br />
            <br />
            {experiences}
          </p>
        </div>
        <div className="col-span-1 ">
          <div className="primary-bg  p-7 rounded-lg">
            <div>
              <h3 className="lg:text-xl font-extrabold text-[#1A1919]">
                Job Details
              </h3>
              <hr className=" bg-[#9873FF] my-6" />
              <p className=" mb-4 flex items-center gap-2 font-medium">
                <img src="../../../public/assets/icons/money.png" />
                <span className="font-bold text-[#474747]">
                  salary <span className="font-extrabold">:</span>{" "}
                  <p className="inline">{salary}</p>
                </span>{" "}
              </p>
              <p className="flex items-center gap-2 font-medium">
                <img src="../../../public/assets/icons/calendar.png" />
                <span className="font-bold text-[#474747]">
                  Job Title <span className="font-extrabold">:</span>{" "}
                  <p className="inline">{job_title}</p>
                </span>{" "}
              </p>
            </div>
            <div className="mt-8">
              <h3 className="lg:text-xl font-extrabold text-[#1A1919]">
                Job Details
              </h3>
              <hr className=" bg-[#9873FF] my-6" />
              <p className=" mb-4 flex items-center gap-2 font-medium">
                <img src="../../../public/assets/icons/money.png" />
                <span className="font-bold text-[#474747]">
                  salary <span className="font-extrabold">:</span>{" "}
                  <p className="inline">{salary}</p>
                </span>{" "}
              </p>
              <p className="flex items-center gap-2 font-medium">
                <img src="../../../public/assets/icons/calendar.png" />
                <span className="font-bold text-[#474747]">
                  Job Title <span className="font-extrabold">:</span>{" "}
                  <p className="inline">{job_title}</p>
                </span>{" "}
              </p>
            </div>
          </div>

          <button
            onClick={handleApplyJob}
            className="mt-6 w-full rounded-md primary-color text-white text-xl py-5 font-extrabold capitalize"
          >
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
