import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from "axios";
import { useState } from "react";
import { json } from 'react-router-dom';

function AddJob(){
    const [company, setCompany] = useState("");
    const [field, setField] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");
    const [clever, setClever] = useState(false);
    const [talented, setTalented] = useState(false);
    const [quick, setQuick] = useState(false);
    const [description, setDescription] = useState("");
    const [requirements,setRequirements]=useState("");
  const handleSave=async()=>{
    const neededCharacters=JSON.stringify({clever,talented,quick});
    const description_req=JSON.stringify({description,requirements});
    const job={name:"empty",genralDescription:description_req,field,subject,city,neededCharacters,company};
    console.log(description_req,requirements,neededCharacters,"save")
    const config = {
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.getItem("acssesToken")
      }
  }
  console.log(sessionStorage.getItem("acssesToken"))
    const response = await axios.post ("http://localhost:5000/job", job,config)
    console.log(response.status)
    if (response.status==201){ 
          alert("job saved");}
  }
    return(<><h2>פרטי משרה</h2>
    <input type="text" onChange={(e) => setCompany(e.target.value)} placeholder="חברה"></input>
    <input type="text" onChange={(e) => setField(e.target.value)} placeholder="תחום"></input>
    <input type="text" onChange={(e) => setSubject(e.target.value)} placeholder="מקצוע"></input>
    <input type="text" onChange={(e) => setCity(e.target.value)} placeholder="עיר"></input>
    <FormGroup>
      <FormControlLabel control={<Checkbox checked={clever} onChange={(e) => setClever(e.target.checked)}/>} label="חכם" />
      <FormControlLabel control={<Checkbox checked={talented} onChange={(e) => setTalented(e.target.checked)}/>} label="מוכשר" />
      <FormControlLabel control={<Checkbox checked={quick} onChange={(e) => setQuick(e.target.checked)}/>} label="זריז" />
    </FormGroup>
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="תיאור כללי"
      style={{ width: 200 }}
    />
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      onChange={(e) => setRequirements(e.target.value)}
      placeholder="דרישות"
      style={{ width: 200 }}
    />
 <button  onClick={handleSave}>שמירה</button>
  

    </>)
}
export default AddJob;