import { useState } from "react"
import React from "react";
const Job=(props)=>{
    const[openModal, setOpenModal]=useState(false);
    return (
    <>
    <div>
        <h4>{props.job.name}</h4><p>{props.job.genralDescription}</p></div>
    <button onClick={()=>setOpenModal(true)}>שלח קו"ח</button>
    {/* <SendCVModal open={openModal}/> */}
    </>)
}

export default Job;