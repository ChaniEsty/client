import React, { useContext } from "react";
import SearchDetails from "./SearchDetails";
import axios from "axios";
import ListJobs from "./Jobs/listJobs";
import { useEffect,useState } from "react";
import Job from "./Jobs/Job";
import { AuthContext } from "../context/authContext";

const PersonalArea=()=>{
    const [jobs,setJobs]=useState([]);
    const {currentUser}=useContext(AuthContext);
    const getDetailes=async()=>{
        const userId=currentUser.email;
        const response = await axios.get (`http://localhost:5000/job/${userId}`)
        //const response = await axios.get (`http://localhost:5000/job/e@.com`)
        alert(response+"amazing")
        setJobs(response.data);
    }
    useEffect(() => { getDetailes() }, [])

    return<>
    <h1>שלום ל</h1>
    <div>{ <ListJobs jobs={jobs}></ListJobs>}</div>
    <SearchDetails></SearchDetails>
    </>
}
export default PersonalArea