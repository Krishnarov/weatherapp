const apikey= "bfc949a46516e5182e1aa8dd6fae20ba";


function getweather(){
    const city=document.getElementById('cityinpur').value;
    const weatherdetales=document.getElementById('res');
    if(city==''){
        weatherdetales.innerHTML="<p>Please Enter city name</p>";

        return;
    }
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        if(data.cod==='404'){
            weatherdetales.innerHTML="<p>city not found please try again</p>"
        }else{
            console.log(data);
            let da=data.sys.sunrise;
            let dat=new Date(da);

            console.log(dat.getUTCMinutes(),dat.getUTCSeconds());
            
            weatherdetales.innerHTML=`<h2>${data.name},${data.sys.country}</h2>
            <p>Temparature:${data.main.temp}</p>
            <p>Max Temparature:${data.main.temp_max}</p>
            <p>Min Temparature:${data.main.temp_min}</p>
            <p>Sun raise:${data.sys.sunrise}</p>
            <p>Wind speed:${data.wind.speed}</p>
            `;
        }
    })
    .catch(error=>{
        weatherdetales.innerHTML='<p>Error fetching data</p>'
    }
    )

};