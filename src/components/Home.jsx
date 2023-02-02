import React, {useEffect, useState} from "react"
import ImageCard from './ImageCard'
import YearPicker from "react-year-picker";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

function Home(){
    const [year, setYear]=useState(2023)
    const [data, setData]=useState([])

    //Get yearly data when the year changes
    useEffect(()=>{
         fetch(`data//apod_${year}.json`, {
             headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
        })
        .then(response=> response.json())
        .then(json=> {
            setData([...json])
        })
        .catch(err=>{
            alert("No data for "+year)
        })
        
    }, [year])

    return(
        <div style={{textAlign: "center"}}>
            <h1>NASA Astronomy Photo of the Day by Year(Public Domain only)</h1>
            <p>Displays all public domain photos off from NASA's APoD site by year. Contains data from 1996-2023(the 2023 data is not up to date) </p>
            <p>Click the title of each card to go to the full picture/video</p>
            <div style={{padding: '0px 700px 200px 700px'}}>
            <label>
                Pick Year
            </label>
                <YearPicker onChange={setYear}/>
            </div>
            <div>
            <Grid container spacing={2}>
                {data.map((image => 
                         <Grid key={image.date}>
                            <ImageCard key={image.date} title={image.title} url={image.url} explanation={image.explanation}/>
                         </Grid>
                         
                    ))}

            </Grid>
            </div>
        
        </div>
        
    )
}

export default Home
