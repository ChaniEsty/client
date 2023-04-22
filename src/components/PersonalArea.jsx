import React from "react";
import SearchDetails from "./SearchDetails";
import axios from "axios";
import ListJobs from "./Jobs/listJobs";
import { useEffect,useState } from "react";
import Job from "./Jobs/Job";
const PersonalArea=()=>{
    const [jobs,setJobs]=useState([]);

    const getDetailes=async()=>{
        const userId=sessionStorage.getItem("userId");
       // const response = await axios.get (`http://localhost:5000/job/${userId}`)
        const response = await axios.get (`http://localhost:5000/job/e@.com`)
        console.log(JSON.stringify(response.data))
        setJobs(response.data);
    }
    useEffect(() => { getDetailes() }, [])

    return<>
    <h1>שלום ל</h1>
    <div>{ <ListJobs jobs={jobs}></ListJobs>}</div>
    <SearchDetails></SearchDetails>
    <Job job="fgsh"></Job>
    </>
}
export default PersonalArea