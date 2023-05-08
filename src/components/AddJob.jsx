import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import axios from "axios";
import { useState,useContext } from "react";
import { AuthContext } from "../context/authContext";
import { InputText} from 'primereact/inputtext';
import { Button } from 'primereact/button';

function AddJob(){
    const [company, setCompany] = useState("");
    const [name, setName] = useState("");
    const [field, setField] = useState("");
    const [subject, setSubject] = useState("");
    const [city, setCity] = useState("");
    const [clever, setClever] = useState(false);
    const [talented, setTalented] = useState(false);
    const [quick, setQuick] = useState(false);
    const [generalDescription, setDescription] = useState("");
    const [requirements,setRequirements]=useState("");
    const {token} = useContext(AuthContext)

  const handleSave=async()=>{
    const neededCharacters=JSON.stringify({clever,talented,quick});
    console.log(generalDescription+"88888888888888888888888888")
    const job={name,generalDescription,requirements,field,subject,city,neededCharacters,company};
    console.log(requirements,neededCharacters,"save")
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
  console.log(token)
    const response = await axios.post ("http://localhost:5000/job", job,config)
    console.log(response.status)
    if (response.status==201){ 
          alert("job saved");}
  }
    return(<><h2>פרטי משרה</h2>
    <InputText type="text" onChange={(e) => setCompany(e.target.value)} placeholder="חברה"></InputText>
    <InputText type="text" onChange={(e) => setName(e.target.value)} placeholder="שם"></InputText>
    <InputText type="text" onChange={(e) => setField(e.target.value)} placeholder="תחום"></InputText>
    <InputText type="text" onChange={(e) => setSubject(e.target.value)} placeholder="מקצוע"></InputText>
    <InputText type="text" onChange={(e) => setCity(e.target.value)} placeholder="עיר"></InputText>
    <FormGroup>
      <FormControlLabel control={<Checkbox checked={clever} onChange={(e) => setClever(e.target.checked)}/>} label="חכם" />
      <FormControlLabel control={<Checkbox checked={talented} onChange={(e) => setTalented(e.target.checked)}/>} label="מוכשר" />
      <FormControlLabel control={<Checkbox checked={quick} onChange={(e) => setQuick(e.target.checked)}/>} label="זריז" />
    </FormGroup>
    <TextareaAutosize
      aria-label="minimum height"
      minRows={5}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="תיאור כללי"
      style={{ width: 200 }}
    />
    <TextareaAutosize
      aria-label="minimum height"
      minRows={5}
      onChange={(e) => setRequirements(e.target.value)}
      placeholder="דרישות"
      style={{ width: 200 }}
    />
  <Button className="button"  onClick={handleSave}>שמירה</Button>
  

    </>)
}
export default AddJob;