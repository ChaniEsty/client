import { useEffect, useState } from "react"
import axios from "axios"
const Uploader = () => {
  const [selectFile, setSelectFile] = useState() ;
  useEffect(() => {
    if(selectFile){
        const formData = new FormData()
        formData.append("file", selectFile)
        axios.post("http://localhost:3600/api/upload",formData)
    }

  }, [selectFile])
    


  const onSelectFile = (e)=>{
    setSelectFile(e.target.files[0])
  }
  return (
    <>
    <label htmlFor="file"> העלאת קובץ </label>
    <input type="file" onChange={onSelectFile} name="file" />
    </>
  )
}

export default Uploader