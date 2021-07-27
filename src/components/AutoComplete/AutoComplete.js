import React from 'react'
// import  { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container ,Grid } from '@material-ui/core';
import { useState } from 'react';
import { ResultsBox } from '../ResultsBox/ResultsBox';
const  AutoComplete = () => {
    const [keyword, setKeyWord] = useState('')
    const handleSearch = (e) =>{
        if(e.target.value.length>=3){
            console.log(e.target.value)
            setKeyWord(e.target.value)
        }
    }
    return (
        <>
        <Container maxWidth="md" style={{marginTop:"10px",display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
           <Grid style={{display:'flex',flexDirection:'column'}} lg={12} >
           <TextField 
          id="outlined-required"
          label="Search"
          variant="outlined"
          onChange={handleSearch}/>
          <ResultsBox keyword={keyword}/>
         </Grid>
        </Container>
        </>
    )
}
export {AutoComplete}