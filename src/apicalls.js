const getData = async (place) => {
    try {
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&APPID=2046cfc80254e13e58679b4f5dea31d1`, { mode: "cors" })

        if(data.status !== 404 && data.status !== 400){

        return data.json();}

        else{alert('Please look for a valid place')}

    } catch (error) {

        console.log(error)
    }
}


export default { getData }