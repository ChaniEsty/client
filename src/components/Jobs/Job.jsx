import { useEffect, useState } from "react"
import React from "react";
import SendCVModal from "./SendCVModel";
import Card from '@mui/material/Card';

//  import "./job.css"
const Job = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Card variant="outlined" sx={{ width: "50%", backgroundColor: "aqua", marginRight:"25%", textAlign:"center"}}>{<><div className="job">
        <h4>{props.job.name}</h4>
        <span>{props.job.genralDescription}</span><br></br>
        <span>עיר:{props.job.city.name}</span><br></br>
        <span>תחום:{props.job.field.name}</span><br></br>
        <span>מקצוע:{props.job.subject.name}</span><br></br>
      </div>
        <button onClick={() => setOpenModal(true)}>שלח קו"ח</button>
        <SendCVModal open={openModal} setOpenModal={setOpenModal} />    </>}</Card>
    </>
  )
}

export default Job;