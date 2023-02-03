const axios=require('axios')
const fs=require('fs')

const endpoint='https://api.nasa.gov/planetary/apod'

for(let i=2023;i<2024;i++){
    axios.get(endpoint, {
    params:{
        api_key: 'DEMO_KEY',
        start_date: i+'-01-01',
        end_date: i+'-2-03' //Current date
    }
})
.then(response=>{
    const no_copyright=response.data.filter(function(obj){
        if(!obj.copyright){
            return obj
        }
    })
    console.log(no_copyright)

    fs.writeFileSync('../data/apod_'+i+'.json', JSON.stringify(no_copyright, null, 4))
})
.catch(error=>{
    console.log(error)
})
}

