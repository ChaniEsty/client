import { useState } from "react"
import React from "react";
import SendCVModal from "./SendCVModel";
import {Card} from '@mui/material';
import { Button } from 'primereact/button';


//  import "./job.css"
const Job = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Card variant="outlined" sx={{ width: "40%", backgroundColor: "#10acb5", marginRight:"30%", textAlign:"center", padding:"2%"}}>{<><div className="job">
        <h4>{props.job.name}</h4>
        <span>תיאור:{props.job.generalDescription}</span><br></br>
        <span>דרישות:{props.job.requirements}</span><br></br>
        <span>עיר:{props.job.city.name}</span><br></br>
        <span>תחום:{props.job.field.name}</span><br></br>
        <span>מקצוע:{props.job.subject.name}</span><br></br>
      </div>
        <Button className="button" size="small" onClick={() => setOpenModal(true)}>שלח קו"ח</Button>
        <SendCVModal open={openModal} setOpenModal={setOpenModal} empId={props.job.employerId}/>    </>}</Card>
    </>
  )
}

export default Job;