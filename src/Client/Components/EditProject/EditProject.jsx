import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useParams}from "react-router-dom"

const EditProject = () => {
  const [project, setProject] = useState("");
 const [contributors, setContributors] = useState("");
 const [description, setDescription] = useState("");

 const id = useParams();
 

  function updateProject(){
    axios.put(`http://localhost:3001/api/projects/${id}`,{
      Project: project,
      Contributors: contributors,
      Project_Description:description

    })
  }


  return (
   <div className="formContainer" style={{display:"flex", justifyContent:"center", width:"100%", marginLeft:"30px"}}>
    
     <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 },}}>
     <div className="titleDiv" style={{display:"flex", justifyContent:"center", fontSize:"25px", marginRight:"100px"}} >Update Project</div>
     <Box component="form" noValidate  sx={{ mt: 3,mr:7 }}    >
       
            <div className="inputContainer" >
            <Grid container spacing={2}>
              <Grid item xs={5} >
                <TextField
                  autoComplete="given-name"
                  name="Project"
                  
                  fullWidth
                  id="Project"
                  label="Project Title"
                  autoFocus
                   onChange={(e)=>{setProject(e.target.value)}}
                />
              </Grid>


               
              <Grid item xs={5} >
                <TextField
                  
                  fullWidth
                  id="Contributors"
                  label="Contributors"
                  name="Contributors"
                  autoComplete="Contributors"
                  
                  onChange={(e)=>{setContributors(e.target.value)}}
                 
                />
              </Grid>

              <Grid item xs={10} >
                <TextField
                  
                  fullWidth
                  id="filled-multiline-flexible"
                  label="Project Description"
                  name="Project_Description"
                  autoComplete="Project Description"
                  multiline
                  rows={6}
                //   defaultValue="hello"
                  
                onChange={(e)=>{setDescription(e.target.value)}}
                 
                />
              </Grid>

            </Grid>
            </div>

           <div className="btndiv"  style={{display:"flex", justifyContent:"center"}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{maxWidth:"35%"}}
               onClick={updateProject}
              
            >
              Update Project
            </Button>
            </div>
  
          </Box>
 


       
        


        
        </Box>

       
   </div>
  )
}

export default EditProject