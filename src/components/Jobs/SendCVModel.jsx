import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
import { FileUpload } from 'primereact/fileupload';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        
import Uploader from "../Uploader";
const SendCVModal = ({open,setOpenModal}) => {
    //const [file, setFile] = useEffect();
    return <><Modal
        open={open}
        onClose={() => setOpenModal(false)}
        aria-labelledby="fileTitle"
        aria-describedby="file"
    >
     {/*   <Box>
            
 import React from 'react';
import { FileUpload } from 'primereact/fileupload';

export default function AdvanceDemo() {
        
    return (
        <div className="card">
            <FileUpload name="demo[]" url={'/api/upload'} multiple accept="image/*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
    )
} */}
<div className="card" style={{width:"50%"}}>
 <FileUpload name="demo[]" url={'/api/upload'} multiple accept="*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
            {/* <Uploader/> */}
    </Modal>

    </>
}
export default SendCVModal;