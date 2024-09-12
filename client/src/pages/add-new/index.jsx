import React from 'react'
import { useContext } from 'react'

const GlobalContext = require("../../context")



 const AddNewBlog = ()=>{

  const {formData, setFormData} = useContext(GlobalContext)


  

  return(
    <>
    <div>
    New Blog
    </div>
    <div className = "form">
    <form>
    <input 
    type = "text"
    placeholder = "Enter Blog Title"
    name = "title"
    id = "title"
    value = {formData.title}
    onChange = {(event)=>setFormData{

      ...formData,

    }}
    
    
    />
    </form>


    </div>
    </>

    

    
  )


 }
 export default AddNewBlog

  