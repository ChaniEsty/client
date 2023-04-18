import React from "react";
import SearchDetails from "./SearchDetails";
import axios from "axios";
import makeListJobs from "./Jobs/listJobs";
import { useEffect,useState } from "react";
const PersonalArea=()=>{
    const [jobs,setJobs]=useState("");
    const handlesave=async()=>{
        jobs.map()
        const response = await axios.post (`http://localhost:5000/user/m@g.com/job`)
    }
    const getDetailes=async()=>{
        const userId=sessionStorage.getItem("userId");
       // const response = await axios.get (`http://localhost:5000/job/${userId}`)
        const response = await axios.get (`http://localhost:5000/job/m@g.com`)
        console.log(response.data)
        const jobs=makeListJobs(response.data);
        setJobs(jobs);
    }
    useEffect(() => { getDetailes() }, [])

    return<>
    <h1>שלום ל</h1>
    <div>{jobs}</div>
    <SearchDetails></SearchDetails>
    <button onClick={handlesave}>שמירה</button>
    </>
}
export default PersonalArea