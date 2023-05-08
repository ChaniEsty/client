import Job from "./Job";
const ListJobs =  ({jobs}) => <>{jobs.map((job,index)=><><br></br><Job key={index} job={job}></Job><br></br></>) }</>
 
 export default ListJobs;