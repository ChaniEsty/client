import { useEffect, useState } from "react"
import React from "react";
import SendCVModal from "./SendCVModel";
import {Card,Button} from '@mui/material';

//  import "./job.css"
const Job = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
    {console.log(props.job.employerId)}
      <Card variant="outlined" sx={{ width: "50%", backgroundColor: "aqua", marginRight:"25%", textAlign:"center"}}>{<><div className="job">
        <h4>{props.job.name}</h4>
        <span>{props.job.genralDescription}</span><br></br>
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