import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const AdditionPage = () => {


  return (
   <div className="formContainer" style={{display:"flex", justifyContent:"center", width:"100%", marginLeft:"30px"}}>
    
     <Box component="form" sx={{ '& .MuiTextField-root': { m: 1 },}}>
     <div className="titleDiv" style={{display:"flex", justifyContent:"center", fontSize:"25px", marginRight:"100px"}} >Add Project</div>
     <Box component="form" noValidate  sx={{ mt: 3,mr:7 }}    >
       
            <div className="inputContainer" >
            <Grid container spacing={2}>
              <Grid item xs={5} >
                <TextField
                  autoComplete="given-name"
                  name="Project"
                  required
                  fullWidth
                  id="Project"
                  label="Project Title"
                  autoFocus
                  // onChange={handleProjectChange}
                />
              </Grid>


               
              <Grid item xs={5} >
                <TextField
                  required
                  fullWidth
                  id="Contributors"
                  label="Contributors"
                  name="Contributors"
                  autoComplete="Contributors"
                  
                  // onChange={handleContributorsChange}
                 
                />
              </Grid>

              <Grid item xs={10} >
                <TextField
                  required
                  fullWidth
                  id="filled-multiline-flexible"
                  label="Project Description"
                  name="Project_Description"
                  autoComplete="Contributors"
                  multiline
                  rows={6}
                  // onChange={handleContributorsChange}
                 
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
              style={{maxWidth:"30%"}}
              // onClick={handleAddSubmit}
            >
              Add Project
            </Button>
            </div>
  
          </Box>
 


       
        


        
        </Box>

       
   </div>
  )
}

export default AdditionPage