import Job from "./Job";
const ListJobs =  ({jobs}) => <>{jobs.map(job=><Job job={job}></Job>) }</>
 
 export default ListJobs;