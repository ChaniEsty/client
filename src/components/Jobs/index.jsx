import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from "react-router-dom";
import ListJobs from "./listJobs";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
//import { Button } from '@mui/material';
import { Button } from 'primereact/button';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { search } = useLocation();
  let query = React.useMemo(() => new URLSearchParams(search), [search]);
  const fields = query.get("field");
  const subjects = query.get("subject");
  const cities = query.get("city");
  const { token } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);
  const handlesave = async () => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const userId = currentUser.email;
    await axios.post(`http://localhost:5000/user/${userId}/job?field=${fields}&subject=${subjects}&city=${cities}`, config)

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
  return (<>
    <ListJobs jobs={jobs} />
    <Button className="button" onClick={handlesave}>שמירה</Button>
  </>
  )
}
export default Jobs;
