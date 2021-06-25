const body = document.getElementById('body');

const createElements = (object) => {

    if (!document.getElementById('maincontainer')) {
        const mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', "maincontainer")
        body.appendChild(mainContainer);

        const containerUpper = document.createElement('div');
        containerUpper.setAttribute('id', "containerUpper");
        mainContainer.appendChild(containerUpper);

        const containerLower = document.createElement('div');
        containerLower.setAttribute('id', "containerLower");
        mainContainer.appendChild(containerLower);

        const locationDivName = document.createElement('div');
        locationDivName.setAttribute('id', "locationDivName");

        const nameText = document.createElement('h1');
        nameText.setAttribute('id', 'nameText');
        nameText.textContent = `${object.name}`;
        locationDivName.appendChild(nameText);

        containerUpper.appendChild(locationDivName);


        const upperSub1 = document.createElement('div');
        upperSub1.setAttribute('id', "upperSub1");
        containerUpper.appendChild(upperSub1);

        const weatherImg = document.createElement('div');
        weatherImg.style.backgroundImage = `url('../src/images/${object.weather[0].description}.png')`
        weatherImg.setAttribute('id', "weatherImg");
        upperSub1.appendChild(weatherImg);


        const weatherIs = document.createElement('h2')
        weatherIs.setAttribute('id', 'weatherIs');
        weatherIs.textContent = `${object.weather[0].description}`.toUpperCase();
        upperSub1.appendChild(weatherIs);




        const lowerSub1 = document.createElement('div');
        lowerSub1.setAttribute('id', 'lowerSub1');
        lowerSub1.classList.add('lowersub');

        const lowerSub2 = document.createElement('div');
        lowerSub2.setAttribute('id', 'lowerSub2');
        lowerSub2.classList.add('lowersub');

        const lowerSub3 = document.createElement('div');
        lowerSub3.setAttribute('id', 'lowerSub3');
        lowerSub3.classList.add('lowersub');

        containerLower.append(lowerSub1, lowerSub2, lowerSub3);


        const thermometer = document.createElement('div');
        thermometer.setAttribute('id', 'thermometer');
        thermometer.classList.add('lowerHeaders');

        const thermometerImg = document.createElement('img')
        thermometerImg.setAttribute('src', '../src/images/thermometer.png');
        thermometerImg.setAttribute('id', 'thermometerImg');
        thermometerImg.classList.add('lowerHeadersImg');
        thermometer.appendChild(thermometerImg);

        lowerSub1.append(thermometer);

        const lowerSub1ListDiv = document.createElement('div');
        lowerSub1ListDiv.setAttribute('id', 'lowerSub1ListDiv');
        lowerSub1ListDiv.classList.add('lowerdivs');
        lowerSub1.appendChild(lowerSub1ListDiv);

        const temperatureHeader = document.createElement('h3')
        temperatureHeader.textContent = 'Temperature';

        lowerSub1ListDiv.appendChild(temperatureHeader);

        const tempUl = document.createElement('ul');
        tempUl.classList.add('lists');

        const maxTemp = document.createElement('li');
        const minTemp = document.createElement('li');
        const sensTemp = document.createElement('li');

        maxTemp.setAttribute('id', 'maxTemp');
        minTemp.setAttribute('id', 'minTemp');
        sensTemp.setAttribute('id', 'sensTemp');

        maxTemp.textContent = `Max Temperature: ${parseInt(object.main.temp_max)} C`;
        minTemp.textContent = `Min Temperature: ${parseInt(object.main.temp_min)} C`;
        sensTemp.textContent = `Thermal sensation: ${parseInt(object.main.feels_like)} C`;


        tempUl.append(maxTemp, minTemp, sensTemp);
        lowerSub1ListDiv.appendChild(tempUl);


        //-----------lowerSUb2-------------//

        const windDiv = document.createElement('div');
        windDiv.setAttribute('id', 'windDiv');
        windDiv.classList.add('lowerHeaders');

        const windImg = document.createElement('img')
        windImg.setAttribute('src', '../src/images/wind.png');
        windImg.setAttribute('id', 'windImg');
        windImg.classList.add('lowerHeadersImg');
        windDiv.appendChild(windImg);

        lowerSub2.append(windDiv);

        const lowerSub2ListDiv = document.createElement('div');
        lowerSub2ListDiv.setAttribute('id', 'lowerSub2ListDiv');
        lowerSub2ListDiv.classList.add('lowerdivs');
        lowerSub2.appendChild(lowerSub2ListDiv);

        const windsHeader = document.createElement('h3')
        windsHeader.textContent = 'Winds';

        lowerSub2ListDiv.appendChild(windsHeader);

        const windUl = document.createElement('ul');
        windUl.classList.add('lists');

        const windSpeed = document.createElement('li');
        const windDirec = document.createElement('li');

        windSpeed.setAttribute('id', 'windSpeed');
        windDirec.setAttribute('id', 'windDirec');

        windSpeed.textContent = `Speed: ${object.wind.speed} KM/H`;
        windDirec.textContent = ` Direction: ${object.wind.deg} degrees`;


        windUl.append(windSpeed, windDirec);
        lowerSub2ListDiv.appendChild(windUl);

        //------lowerSub3----------///

        const SunsetDiv = document.createElement('div');
        SunsetDiv.setAttribute('id', 'SunsetDiv');
        SunsetDiv.classList.add('lowerHeaders');

        const sunsetImg = document.createElement('img')
        sunsetImg.setAttribute('src', '../src/images/ambient.png');
        sunsetImg.setAttribute('id', 'ambientImg');
        sunsetImg.classList.add('lowerHeadersImg');
        SunsetDiv.appendChild(sunsetImg);

        lowerSub3.append(SunsetDiv);

        const lowerSub3ListDiv = document.createElement('div');
        lowerSub3ListDiv.setAttribute('id', 'lowerSub3ListDiv');
        lowerSub3ListDiv.classList.add('lowerdivs');
        lowerSub3.appendChild(lowerSub3ListDiv);

        const cloudsHeader = document.createElement('h3')
        cloudsHeader.textContent = 'Ambient';

        lowerSub3ListDiv.appendChild(cloudsHeader);

        const cloudsUl = document.createElement('ul');
        cloudsUl.classList.add('lists');

        const cloudiness = document.createElement('li');
        const humidity = document.createElement('li');

        cloudiness.setAttribute('id', 'cloudiness');
        humidity.setAttribute('id', 'humidity');

        cloudiness.textContent = `Cloudiness: ${object.clouds.all} %`;
        humidity.textContent = `Humidity: ${object.main.humidity} %`;


        cloudsUl.append(cloudiness, humidity);
        lowerSub3ListDiv.appendChild(cloudsUl);

    }

    else{

        document.getElementById('weatherImg').style.backgroundImage = `url('../src/images/${object.weather[0].description}.png')`

        document.getElementById('nameText').textContent = `${object.name}`;
        document.getElementById('weatherIs').textContent = `${object.weather[0].description}`.toUpperCase();

        document.getElementById('maxTemp').textContent = `Max Temperature: ${parseInt(object.main.temp_max)} C`;
        document.getElementById('minTemp').textContent = `Min Temperature: ${parseInt(object.main.temp_min)} C`;
        document.getElementById('sensTemp').textContent = `Thermal sensation: ${parseInt(object.main.feels_like)} C`;

        document.getElementById('windSpeed').textContent = `Speed: ${object.wind.speed} KM/H`;
        document.getElementById('windDirec').textContent = ` Direction: ${object.wind.deg} degrees`;

        document.getElementById('cloudiness').textContent = `Cloudiness: ${object.clouds.all} %`;
        document.getElementById('humidity').textContent = `Humidity: ${object.main.humidity} %`;

    }
    

}

export default { createElements }