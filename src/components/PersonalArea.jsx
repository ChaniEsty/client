import React from "react";
import SearchDetails from "./SearchDetails";
import axios from "axios";
import makeListJobs from "./Jobs/listJobs";
const PersonalArea=()=>{
    const getDetailes=async()=>{
        const userId=sessionStorage.getItem("userId");
        const response = await axios.get (`http://localhost:5000/job/${userId}`)
        const jobs=makeListJobs(response.data);
       
    }
    return<>
    <SearchDetails></SearchDetails>
    </>
}
export default PersonalArea