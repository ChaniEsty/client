import React, { useState, useContext } from "react"
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Box } from '@mui/material';
import { Button } from 'primereact/button';
import { AuthContext } from "../context/authContext";
import axios from "axios";

const Contact = () => {
    const [inqueries, setInqueries] = useState("");
    const { token } = useContext(AuthContext);

    const handleSave = async () => {
        const config = {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        const data = {
            "inquires": inqueries
        }
        const res = await axios.post("http://localhost:5000/inquiries", data, config);
        if (res.status == 200) {
            alert("הפניה נשלחה בהצלחה ותטופל בהקדם")
        }
        else {
            alert("לא הצלחנו לקבל את פניתכם נשמח שתשלחו שוב מצטערים על התקלה")
        }
    };
    return (
        <><Box style={{ padding: "5%" }}>
            <h1 style={{ textAlign: "center" }}>רוצים להכיר? דברו איתנו</h1><br></br>
            <TextareaAutosize
                className="input"
                aria-label="minimum height"
                minRows={15}
                placeholder="תוכן הפניה"
                onChange={(e) => setInqueries(e.target.value)}
                style={{ width: "50%", marginRight: "25%", fontSizeAdjust: "70" }}
            />
            <br></br>
            <Button style={{ marginRight: "75%" }} className="button" onClick={handleSave}>שמירה</Button>
        </Box></>
    )
}
export default Contact;