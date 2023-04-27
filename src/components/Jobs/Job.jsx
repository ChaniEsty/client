import { useEffect, useState } from "react"
import React from "react";
import SendCVModal from "./SendCVModel";
const Job = (props) => {
  const [openModal, setOpenModal] = useState(false);
  console.log(props.job);
  return (
    <>
      <div>
        <h4>{props.job.name}</h4>
       <span>{props.job.generalDescription}</span><br></br>
        <span>עיר:{props.job.city}</span><br></br>
        <span>תחום:{props.job.field}</span><br></br>
        <span>מקצוע:{props.job.subject}</span><br></br>  {/* */}
        </div>
      <button onClick={() => setOpenModal(true)}>שלח קו"ח</button>
      <SendCVModal open={openModal} setOpenModal={setOpenModal} />    </>
  )
}

export default Job;