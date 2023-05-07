import Job from "./Job";
const ListJobs =  ({jobs}) => <>{jobs.map((job,index)=><Job key={index} job={job}></Job>) }</>
 
 export default ListJobs;