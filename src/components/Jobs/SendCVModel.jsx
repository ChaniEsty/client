import React, { useEffect } from "react";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
import Uploader from "../Uploader";
const SendCVModal = ({open,setOpenModal}) => {
    //const [file, setFile] = useEffect();
    return <><Modal
        open={open}
        onClose={() => setOpenModal(false)}
        aria-labelledby="fileTitle"
        aria-describedby="file"
    >
        <Box>
            <Uploader/>
        </Box>
    </Modal>

    </>
}
export default SendCVModal;