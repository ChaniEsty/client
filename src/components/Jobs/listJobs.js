import Job from "./Job";
const makeListJobs = async (jobList) => {
    // const jobList = await getJobs();
     const jobMapped = jobList.map((job) => <Job job={job}></Job>);
     // setJobs(jobMapped);
     return jobMapped
 }
 export default makeListJobs;