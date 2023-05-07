import { useEffect, useState } from "react"
import axios from "axios"
const Uploader = () => {
  const [selectFile, setSelectFile] = useState() ;
  useEffect(() => {
    if(selectFile){
        const formData = new FormData()
        formData.append("file", selectFile)
        axios.post("http://localhost:5000/upload",formData)
    }

  }, [selectFile])
    


  const onSelectFile = (e)=>{
    setSelectFile(e.target.files[0])
  }
  return (
    <>
    <div >
    <label htmlFor="file"> העלאת קובץ </label>
    <input type="file" onChange={onSelectFile} name="file" /></div>
    </>
  )
}

export default Uploader