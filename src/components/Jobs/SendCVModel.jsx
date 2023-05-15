import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; import React, { useState } from "react";
import { Modal, Alert, Snackbar } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { FileUpload } from 'primereact/fileupload';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const SendCVModal = ({ open, setOpenModal, empId }) => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const { token } = useContext(AuthContext)
    const addHeaders = (event) => {
        console.log(event);
        event.xhr.setRequestHeader('Authorization', 'Bearer ' + token);
        return event;
    }
    return <><Modal
        open={open}
        onClose={() => setOpenModal(false)}
        aria-labelledby="fileTitle"
        aria-describedby="file"
    >
        <div className="card" style={{ width: "50%" }}>
            <FileUpload
                onBeforeSend={addHeaders} url={"http://localhost:5000/user?empId=" + empId} onUpload={() => { setOpenSnackbar(true) }} multiple accept="*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
    </Modal>
        <Snackbar onClose={() => { setOpenSnackbar(false) }} sx={{ Width: '500px' }} open={openSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}  autoHideDuration={6000} >
            <Alert onClose={() => { setOpenSnackbar(false) }} variant="filled"  severity="success" sx={{ width: '300px' }}
                iconMapping={{ success: <CheckCircleOutlineIcon fontSize="inherit" />, }}> &nbsp;&nbsp;&nbsp;קו"ח נשלחו בהצלחה &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Alert>
        </Snackbar></>

}
export default SendCVModal;