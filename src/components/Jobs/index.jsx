import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import ListJobs from "./listJobs";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
//import { Button } from '@mui/material';
import { Button } from 'primereact/button';
import SearchDetails from "../SearchDetails"
import {Box} from '@mui/material'
const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { search } = useLocation();
  let query = React.useMemo(() => new URLSearchParams(search), [search]);
  const fields = query.get("field");
  const subjects = query.get("subject");
  const cities = query.get("city");
  const { token } = useContext(AuthContext);
  //const { currentUser } = useContext(AuthContext);
  const handlesave = async () => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    await axios.get(`http://localhost:5000/user/job?field=${fields}&subject=${subjects}&city=${cities}`, config)

  }
  const getJobs = async () => {
    console.log(fields, subjects, cities);
    const response = await fetch(`http://localhost:5000/job?fields=${fields}&subjects=${subjects}&cities=${cities}`,
      {
        method: 'GET',
      })
    const jobList = await response.json();
    setJobs(jobList);
  }
  useEffect(() => { getJobs() }, [])
  useEffect(() => {getJobs()}, [subjects,cities,fields])
  return (<>{
    jobs.length>0?
      
        <><SearchDetails></SearchDetails><h1 style={{textAlign:"center"}}> { `${subjects ? subjects + "," : ""}${cities ? cities + "," : ""}${fields ? fields + "," : ""}רשימת המשרות שלך:`}</h1>
        <ListJobs  jobs={jobs} />
        <Button style={{margin:"0 47.5% 2% 47.5% ",minWidth:"100px"}} className="button" onClick={handlesave}>שמירה</Button>
      </>: 
     <> <Box sx={{textAlign:"center",marginTop:"10%"}}><h3>מצטערים לא נמצאו משרות שמתאימות לחיפוש שלך </h3><br></br><h2>חפש שנית</h2><br></br><SearchDetails></SearchDetails></Box></>
    }</>
  )
}
export default Jobs;
