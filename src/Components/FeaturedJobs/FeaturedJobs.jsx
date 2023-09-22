import { useEffect, useState } from "react";
import Job from "../Job/job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way to load show all data
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("./jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="text-center mb">
      <div>
        <h2 className=" text-5xl text-center font-extrabold ">Featured Jobs</h2>
        <p className="font-semibold text-base mt-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {jobs?.slice(0, dataLength).map((job, idx) => (
          <Job key={idx} job={job} />
        ))}
      </div>
      <div className={dataLength===jobs.length&&"hidden"}>
        <button
        onClick={()=>setDataLength(jobs.length)} className="rounded-md primary-color mt-10 text-white text-xl px-4 py-2 font-extrabold capitalize">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
