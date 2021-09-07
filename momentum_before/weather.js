const weather = document.querySelector(".js-weather")

const COORDS ='coords'
const API_KEY = 'baaf45a5df04537539eda50787872798'



//API 가져왔고, askForClimate
//api에서 어떻게 정보를 가져올 수 있는지, 어떤 정보를 가져올수 있는지 볼것

function getClimate(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    })
    .then(function(json){
        const temp = json.main.temp;
        const place = json.name;
        weather.innerText = `${temp} \n ${place}`
    })
    
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj))
}

function handleGeoSuccess(pos) {
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;    
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
}

function askForCoords(){
            navigator.geolocation.getCurrentPosition(handleGeoSuccess);            
}

function loadcoords(){ ///위치 정보 있으면, 날씨 불러오기, 없으면 위치 불러오기
    const loadedcoords = localStorage.getItem(COORDS);
    if(loadedcoords){
        const parsedCoords = JSON.parse(loadedcoords);
        getClimate(parsedCoords.latitude,parsedCoords.longitude);
    }else 
    askForCoords();
}

function init(){
    loadcoords();

}

init();