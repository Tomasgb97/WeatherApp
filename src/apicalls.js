const getData = async () => {

    const data = fetch('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=2046cfc80254e13e58679b4f5dea31d1', {mode: "cors"})
    
    const repsonse = await (await data).json()
    console.log(repsonse)
}


export default {getData}