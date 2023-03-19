import { useNavigate } from "react-router-dom"
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useEffect, useState } from "react";

const Home = () => {
    const [field, setField]=useState("");
    const [subject, setSubject]=useState("");
    const [city, setCity]=useState("");
    const [nameFields, setNameFields] = useState([]);
    const [nameSubjects, setNameSubjects] = useState([]);
    const [nameCities, setNameCities] = useState([]);
    // const navigate = useNavigate();

    const handleSearch = () => {
        // navigate("jobs");
        window.location.href = `jobs?field=${field}&subject=${subject}&city=${city}`;
    }
    const getFields = async () => {
        const response = await fetch("http://localhost:5000/field",
            {
                method: 'GET',
            })
        const fields = await response.json();
        let tmpNameFields = fields.map(field => field.name)
        setNameFields(tmpNameFields);
    }
    const getSubjects = async () => {
        const response = await fetch("http://localhost:5000/subject",
            {
                method: 'GET',
            })
        const subjects = await response.json();
        let tmpNameSubjects = subjects.map(subject => subject.name)
        setNameSubjects(tmpNameSubjects);
    }
    const getCities = async () => {
        const response = await fetch("http://localhost:5000/city",
            {
                method: 'GET',
            })
        const cities = await response.json();
        let tmpNameCities = cities.map(city => city.name)
        setNameCities(tmpNameCities);
    }

    const getOptions = () => {
        getFields();
        getSubjects();
        getCities();
    }
    useEffect(() => { getOptions() }, [])
    return (
        <>
        <h1>hello</h1>
            <Autocomplete
                id="field"
                style={{ width: 300 }}
                options={nameFields}
                multiple
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="תחום"
                        variant="outlined"
                    />
                )}
                onChange={(event, value) => setField(value)}
                // onInputChange={(e)=>{setField(e.inputValue)}}
            />
            <Autocomplete
                id="subject"
                style={{ width: 300 }}
                options={nameSubjects}
                getOptionLabel={option => option}
                multiple
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="מקצוע"
                        variant="outlined"
                    />
                )}
                onChange={(event, value) => setSubject(value)}
                // onBlur={(e)=>{setSubject(e.inputValue)}}
            />
            <Autocomplete
                id="city"
                style={{ width: 300 }}
                options={nameCities}
                getOptionLabel={option => option}
                multiple
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="עיר"
                        variant="outlined"
                    />
                )}
                
               onChange={(event, value) => setCity(value)} // prints the selected value
    // renderInput={params => (
    //     <TextField {...params} label="Label" variant="outlined" fullWidth />
    // )}
/>
                {/* onBlur={(event,value)=>{setCity(value)}}
            /> */}

            {/* <Autocomplete label="תחום" onSelect={e => setField(e.value)} />
            <Autocomplete label="תחום" onSelect={e => setField(e.value)} />  */}

            <button onClick={handleSearch}>חיפוש</button>
        </>);

}
export default Home;
