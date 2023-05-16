import React, { useContext } from "react";
import SearchDetails from "./SearchDetails";
import axios from "axios";
import ListJobs from "./Jobs/listJobs";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { Typography } from "@mui/material";

const PersonalArea = () => {
    const [jobs, setJobs] = useState([]);
    const { currentUser } = useContext(AuthContext);
    const getDetailes = async () => {
        console.log(currentUser);
        let userId=null;
        if (currentUser != null) { userId = currentUser.email; }
        const response = await axios.get(`http://localhost:5000/job/${userId}`);
        console.log(response, "inp");
        if (response.data != "no jobs")
            setJobs(response.data.jobs);
    }
    useEffect(() => { getDetailes() }, [])

    return <>
        <h1 style={{ textAlign: "center" }}>שלום {currentUser ? currentUser.name : "אורח"}</h1>
        {(currentUser!=null&&currentUser.role == "employee") ? <> <Typography sx={{ textAlign: "center" }} variant="h6">רשימת המשרות המותאמות לך: </Typography><div>{<ListJobs jobs={jobs}></ListJobs>}</div><br></br><SearchDetails></SearchDetails></> : <></>}

    </>
}
export default PersonalArea