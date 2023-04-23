import { useState } from "react"
import React from "react";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
const Job=(props)=>{
    const[openModal, setOpenModal]=useState(false);
    
    return (
        <>
        <div>
            <h4>{props.job.name}</h4><p>{props.job.genralDescription}</p></div>
        <button onClick={()=>setOpenModal(true)}>שלח קו"ח</button>
        <Modal
            open={openModal}
            onClose={()=>setOpenModal(false)}
            aria-labelledby="fileTitle"
            aria-describedby="file"
        >
            <Box>
                <h4 id="fileTitle">העלאת קובץ</h4>
                <input id="file" type={File}></input>
            </Box>
        </Modal>
        {/* <SendCVModal open={openModal}/> */}
        </>
    )
}
{/* <Button onClick={handleOpen}>Open modal</Button>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal> */}

export default Job;