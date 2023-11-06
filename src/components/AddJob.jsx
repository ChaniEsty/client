import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, Box } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from "axios";
import { useState, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function AddJob() {
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [subject, setSubject] = useState("");
  const [city, setCity] = useState("");
  const [energetic, setEnergetic] = useState(false);
  const [sensitive, setSensitive] = useState(false);
  const [friendly, setFriendly] = useState(false);
  const [effective, setEffective] = useState(false);
  const [curious, setCurious] = useState(false);

  const [generalDescription, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const { token, currentUser } = useContext(AuthContext);
  // const { currentUser } = useContext(AuthContext);

  const handleSave = async () => {
    console.log(currentUser);
    if (currentUser.role === "employee")
      alert("not authorized")
    else {
      const neededCharacters = JSON.stringify({ energetic, sensitive,friendly,effective, curious });
      const job = { name, generalDescription, requirements, field, subject, city, neededCharacters, company };
      const config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      }
      console.log(token)
      const response = await axios.post("http://localhost:5000/job", job, config)
      console.log(response.status)
      if (response.status === 201) {
        alert("job saved");
      }
    }
  }
  return (<>

    <Box sx={{ width: '50%', gap: "50%", paddingTop: '2%', paddingRight: '40%' }}>
      <h2>פרטי משרה</h2>
      <div className="p-float-label">
        <InputText className="input" type="text" onChange={(e) => setCompany(e.target.value)} ></InputText>
        <label>חברה</label>
      </div>&nbsp;&nbsp;
      <div className="p-float-label">
        <InputText className="input" type="text" onChange={(e) => setName(e.target.value)} ></InputText>
        <label>שם</label>
      </div>&nbsp;&nbsp;
      <div className="p-float-label">
        <InputText className="input" type="text" onChange={(e) => setField(e.target.value)} ></InputText>
        <label>תחום</label>
      </div>&nbsp;&nbsp;
      <div className="p-float-label">
        <InputText className="input" type="text" onChange={(e) => setSubject(e.target.value)} ></InputText>
        <label>מקצוע</label>
      </div>&nbsp;&nbsp;
      <div className="p-float-label">
        <InputText className="input" type="text" onChange={(e) => setCity(e.target.value)} ></InputText>
        <label>עיר</label>
      </div>&nbsp;&nbsp;
      <FormGroup>
      {/* ["אנרגטי","רגיש","ידידותי","יעיל","סקרן"] */}
        <FormControlLabel control={<Checkbox className={`checkbox${energetic}`} checked={energetic} onChange={(e) => setEnergetic(e.target.checked)} />} label="אנרגטי" />
        <FormControlLabel control={<Checkbox className={`checkbox${sensitive}`} checked={sensitive} onChange={(e) => setSensitive(e.target.checked)} />} label="רגיש" />
        <FormControlLabel control={<Checkbox className={`checkbox${friendly}`} checked={friendly} onChange={(e) => setFriendly(e.target.checked)} />} label="ידידותי" />
        <FormControlLabel control={<Checkbox className={`checkbox${effective}`} checked={effective} onChange={(e) => setEffective(e.target.checked)} />} label="יעיל" />
        <FormControlLabel control={<Checkbox className={`checkbox${curious}`} checked={curious} onChange={(e) => setCurious(e.target.checked)} />} label="סקרן" />
      </FormGroup>
      <div className="p-float-label"><TextareaAutosize
        className="input"
        aria-label="minimum height"
        minRows={5}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: 200 }}
      /><label>תיאור כללי</label></div>
      <div className="p-float-label"><TextareaAutosize
        className="input"
        aria-label="minimum height"
        minRows={5}
        onChange={(e) => setRequirements(e.target.value)}
        style={{ width: 200 }}
      /><label>דרישות</label></div>
      <Button className="button" onClick={handleSave}>שמירה</Button>

    </Box> </>)
}
export default AddJob;
