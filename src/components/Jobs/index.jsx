import Job from "./Job";
import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import makeListJobs from "./listJobs";
import ListJobs from "./listJobs";
const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const { search } = useLocation();
    let query = React.useMemo(() => new URLSearchParams(search), [search]);
    const fields = query.get("field");
    const subjects = query.get("subject");
    const cities = query.get("city");
    const getJobs = async () => {
        console.log(fields,subjects,cities);
        const response = await fetch(`http://localhost:5000/job?fields=${fields}&subjects=${subjects}&cities=${cities}`,
            {
                method: 'GET',
            })
        const jobList = await response.json();
        console.log(jobList);
        //jobs.map((job) => { <Job job={job}></Job> });
      // return await makeListJobs(jobList);
      setJobs(jobList); 
    }
    useEffect(() => { getJobs() }, [])

    // useEffect(async() => {
    //     const jobMapped=await getJobs();
    //     setJobs(jobMapped);
    //  }, [])
    // useEffect(async() => { await makeListJobs() }, [])
    return (<ListJobs jobs={jobs}/>
      
   
    )
}
export default Jobs;
// 1 גישה לסרבר לקבל משרות
// 2 מאפ שמחזיר משרה <Misra misra={misra}>