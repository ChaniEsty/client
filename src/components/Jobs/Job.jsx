import { useState } from "react"
import React from "react";
import SendCVModal from "./SendCVModel";
import {Card} from '@mui/material';
import { Button } from 'primereact/button';
import { textAlign } from "@mui/system";


//  import "./job.css"
const Job = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Card variant="outlined" sx={{ width: "40%", backgroundColor: "#10acb5", marginRight:"30%", textAlign:"right", padding:"2%"}}>{<>
      
      <div className="job">
        <h1>{props.job.name}</h1>
        <div>
          <span><b>תיאור:</b></span><br></br>
          <p>{props.job.generalDescription}</p>
        </div>
        <div>
          <span><b>דרישות</b>:</span><br></br>
          <p>{props.job.requirements}</p>
        </div>
        <span>עיר:{props.job.city.name}</span><br></br>
        <span>תחום:{props.job.field.name}</span><br></br>
        <span>מקצוע:{props.job.subject.name}</span><br></br>
      </div>
        <Button sx={{marginRight:"90%"}}className="button" size="small" onClick={() => setOpenModal(true)}>שלח קו"ח</Button>
        <SendCVModal open={openModal} setOpenModal={setOpenModal} empId={props.job.employerId}/>    </>}</Card>
    </>
  )
}

export default Job;