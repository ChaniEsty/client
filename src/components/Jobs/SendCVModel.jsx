import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css"; import React from "react";
import { Modal } from "@mui/material";
import { FileUpload } from 'primereact/fileupload';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const SendCVModal = ({ open, setOpenModal, empId }) => {
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
                onBeforeSend={addHeaders} url={"http://localhost:5000/user?empId=" + empId} onUpload={() => alert("cv sent")} multiple accept="*" maxFileSize={1000000} emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
        </div>
    </Modal></>

}
export default SendCVModal;