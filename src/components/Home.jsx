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
        
    }, [year])

    return(
        <div>
            <h1>Test</h1>
    
            <div>
            <Grid container spacing={1}>
                {data.map((image => 
                         <Grid key={image.date}>
                            <ImageCard key={image.date} title={image.title} url={image.url} explanation={image.explanation}/>
                         </Grid>
                         
                    ))}

            </Grid>
                  <div>
                <YearPicker onChange={setYear}/>
            </div>
            </div>
        
        </div>
        
    )
}

export default Home
