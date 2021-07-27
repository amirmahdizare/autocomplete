import React from 'react'
import { search } from '../../APIs/Search'
import { useState, useEffect } from 'react'
import { SearchResult } from '../SearchResult/SearchResult'
import { Grid } from '@material-ui/core'
const ResultsBox = (props) => {
    const [Results, setResults] = useState([])
    console.log(props.keyword)
    useEffect(() => {
        search(props.keyword)
        .then((responseData) => {
            // console.log("Inja")
            setResults(responseData.items)
        })
        .catch((err)=>{
            // setResults([])
            console.log(err)
        })
    },[props])
    // console.log(Results)
    return (
        <Grid  spacing={2}> 
            {Results.map((result) => {
                return <SearchResult searchedWord={props.keyword} title={result.volumeInfo.title}  author={result.volumeInfo.publisher} />
            })}
        </Grid>
    )
}
export { ResultsBox }