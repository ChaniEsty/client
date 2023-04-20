import React from "react";
import SearchDetails from "./SearchDetails";
import axios from "axios";
import makeListJobs from "./Jobs/listJobs";
import { useEffect,useState } from "react";
import Job from "./Jobs/Job";
const PersonalArea=()=>{
    const [jobs,setJobs]=useState([]);
    // const handlesave=()=>{

    //     jobs.map(async(job)=>{
    //         const response = await axios.post (`http://localhost:5000/user/e@g.com/job`,job)
    //     })
        
    // }
    const getDetailes=async()=>{
        const userId=sessionStorage.getItem("userId");
       // const response = await axios.get (`http://localhost:5000/job/${userId}`)
        const response = await axios.get (`http://localhost:5000/job/e@g.com`)
        console.log(JSON.stringify(response.data))
        //const job=makeListJobs(response.data);
        //setJobs(job);
        setJobs(response.data);
    }
    useEffect(() => { getDetailes() }, [])

    return<>
    <h1>שלום ל</h1>
    <div>{async()=>await makeListJobs(jobs)}</div>
    <SearchDetails></SearchDetails>
    <Job job="fgsh"></Job>
    {/* <button onClick={handlesave}>שמירה</button> */}
    </>
}
export default PersonalArea