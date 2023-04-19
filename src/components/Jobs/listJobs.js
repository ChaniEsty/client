import Job from "./Job";
const ListJobs =  (props) => <>{props.jobs.map((job) => <Job  job={job}/>)}</>
 
 export default ListJobs;