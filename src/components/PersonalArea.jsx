import React, { useContext } from "react";
import SearchDetails from "./SearchDetails";
import axios from "axios";
import ListJobs from "./Jobs/listJobs";
import { useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { Button, Typography } from "@mui/material";
import TextareaAutosize from '@mui/base/TextareaAutosize';
import "./style.css"
const PersonalArea = () => {
  const [jobs, setJobs] = useState([]);
  const [personality, setPersonality] = useState("");
  const { currentUser, token } = useContext(AuthContext);
  const getDetailes = async () => {
    console.log(currentUser);
    let email = null;
    if (currentUser != null) {
      email = currentUser.email;
    }
    const response = await axios.get(`http://localhost:5000/job/${email}`);
    console.log(response, "inp");
    if (response.data != "no jobs") {
      console.log(response.data.jobs);
      setJobs(response.data.jobs);
    }

  }
  // const translateText = async (hebrewText) => {
  //   const apiKey = 'YOUR_API_KEY';
  //   const apiUrl = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  //   const response = await fetch(apiUrl, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       q: hebrewText,
  //       source: 'iw',  // 'iw' is the language code for Hebrew
  //       target: 'en',  // 'en' is the language code for English
  //     }),
  //   });

  //   const data = await response.json();
  //   detectPersonality(data.data.translations[0].translatedText);
  //   // return data.data.translations[0].translatedText;
  // };

  //   // Example usage
  //   const hebrewText = 'שלום, אני מדבר עברית';
  //   translateText(hebrewText)
  //     .then((translatedText) => console.log('Translated text:', translatedText))
  //     .catch((error) => console.error('Translation error:', error));

  // }
  const detectPersonality = async () => {
    const response = await axios.post('http://127.0.0.1:8000/detect-personality', { text: personality }
    );
    console.log(response.status);
    console.log(response.data);
    const config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    const personality =
      axios.post('http://localhost:5000/user/personality', response.data, config);
  }
  useEffect(() => { getDetailes() }, [])

  return <>
    <h1 style={{ textAlign: "center" }}>שלום {currentUser ? currentUser.name : "אורח"}</h1>
    {(currentUser != null && currentUser.role == "employee") ? <> {jobs.length > 0 ? <Typography sx={{ textAlign: "center" }} variant="h6">רשימת המשרות המותאמות לך: </Typography> : <Typography sx={{ textAlign: "center" }} variant="h6">עדיין לא בחרת משרות! </Typography>}<div>{<ListJobs jobs={jobs}></ListJobs>}</div><br></br><div style={{ marginBottom: "80px" }}><SearchDetails></SearchDetails></div><p style={{ textAlign: "center" }}>להתאמה מלאה של המשרות כתוב מעט על עצמך </p>
      <TextareaAutosize
        className="input"
        aria-label="minimum height"
        minRows={15}
        placeholder="תוכן הפניה"
        onChange={(e) => setPersonality(e.target.value)}
        style={{ width: "50%", marginRight: "25%", fontSizeAdjust: "70" }}
      />
      <Button className="button" sx={{ marginRight: "75%", marginTop: 2 }} onClick={detectPersonality}>שליחה</Button>
      <Button></Button></> : <></>
    }</>
}
export default PersonalArea;