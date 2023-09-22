import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter == "All") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "Remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "Onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div className="container mx-auto my-32">
      <div className="flex justify-end">
        <details className="dropdown mb-8">
          <summary className="m-1 btn">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handleJobsFilter("All")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobsFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleJobsFilter("Onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      {displayJobs.map((job, idx) => (
        <AppliedJob key={idx} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
