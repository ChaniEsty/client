import React, { useContext } from "react";
import SearchDetails from "./SearchDetails";
import axios from "axios";
import ListJobs from "./Jobs/listJobs";
import { useEffect,useState } from "react";
import { AuthContext } from "../context/authContext";
import { textAlign } from "@mui/system";

const PersonalArea=()=>{
    const [jobs,setJobs]=useState([]);
    const {currentUser}=useContext(AuthContext);
    const getDetailes=async()=>{
        debugger;
        const userId=currentUser.email;
        const response = await axios.get (`http://localhost:5000/job/${userId}`);
        console.log(response,"inp");
        if(response.data!="no jobs")
            setJobs(response.data.jobs);
    }
    useEffect(() => { getDetailes() }, [])

    return<>
    <h1 style={{textAlign:"center"}}>שלום ל{ currentUser?currentUser.name:"אורח"}</h1>
    <div>{ <ListJobs jobs={jobs}></ListJobs>}</div><br></br>
    <SearchDetails></SearchDetails>
    </>
}
export default PersonalArea