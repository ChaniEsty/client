import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextareaAutosize from '@mui/base/TextareaAutosize';
function AddJob(){
    const load=()=>{
      
    }
    return(<><h2>פרטי משרה</h2>
    <input type="text" placeholder="תחום"></input>
    <input type="text" placeholder="מקצוע"></input>
    <input type="text" placeholder="עיר"></input>
    <FormGroup>
      <FormControlLabel control={<Checkbox/>} label="חכם" />
      <FormControlLabel control={<Checkbox />} label="חכם" />
      <FormControlLabel control={<Checkbox />} label="חכם" />
    </FormGroup>
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="תיאור כללי"
      style={{ width: 200 }}
    />
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder="דרישות"
      style={{ width: 200 }}
    />
 <button className="button" onClick={load}>חיפוש</button>
  

    </>)
}
export default AddJob;