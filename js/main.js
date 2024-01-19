 document.getElementById("search").addEventListener("keyup",function (e) {
    getcurrentweather(e.target.value)
    
})
var alldata;

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
function getcurrentweather(city) {
var req=new XMLHttpRequest();
req.open("get",` https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${city}&days=3`)
req.send();
req.addEventListener("loadend",function () {
    if(this.status==200){
      alldata=JSON.parse(req.response);
      displaydata(alldata)
      displaynext(alldata)
     
    } 
})
    
}
function displaydata(a) {
    let cartona="";
    var e=new Date(a.current.last_updated.replace(" ","T"));
       cartona+=`
   
                            <div class="header ">
                                <div class="day">${days[e.getDay()]}</div>
                                <div class="date">${e.getDate()+monthNames[e.getMonth()]}</div>
                            </div>
                            <div class="todaydata">
                                <div class=" text-start">
                                    <div class="city-name fs-2 mb-2" id="cityname">${a.location.name}</div>
                                    <div class="degree py-2 mb-3">
                                        <div class="num  me-5 fs-1 degeeodtoday">
                                        ${a.current.temp_c}
                                            <sup>o</sup>
                                            C
                                        </div>
                                        <div class="todaydataImage">
                                        <img src=""https:${a.current.condition.icon}" " alt="" width="50px">
                                        </div>
                                    
    
    
                                    </div>
                                    <div class="fs-5 weatherstatusoftoday">${a.current.condition.text}</div>
                                    <span class="me-3"><img src="images/icon-umberella@2x.png" alt="" width="21" height="21" class="me-1">20%</span>
                                    <span class="me-3"><img src="images/icon-wind@2x.png" alt="" width="23" height="21" class="me-1">18km/h</span>
                                    <span class="me-3"><img src="images/icon-compass@2x.png" alt="" width="21" height="21" class="me-1">East</span>
                                </div>
                              
                            </div>
                        
                       
    `
   
    document.querySelector(".contentdata").innerHTML=cartona;
    
  } 
  function displaynext(a) {
    let term2="";
    let term3="";
    // for (let i = 1; i < a.forecast.forecastday.length; i++) 
        term2+=`
      
        <div class="headnext">
        ${days[new Date(a.forecast.forecastday[1].date.replace(" ","T")).getDay()]}
        </div>
        <div class="nextdata ">
            <div class="text-center">
                <div class="imgnextday">
                    <img src="https:${a.forecast.forecastday[1].day.condition.icon}" alt="">
                </div>
                <div class="degeeofnextday fs-3 fw-bold">${a.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
                 <small class="smalldegreeofnextday">${a.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></small>
                 <div class="fs-5 weatherstatusofnextday">${a.forecast.forecastday[1].day.condition.text}</div>
             
            </div>
        
        </div>
    
        `
        term3+=`
        
        <div class="headthrid">
        ${days[new Date(a.forecast.forecastday[2].date.replace(" ","T")).getDay()]}
        </div>
        <div class="thriddata ">
            <div class="text-center">
                <div class="imgnextday">
                    <img src="https:${a.forecast.forecastday[2].day.condition.icon}" alt="">
                </div>
                <div class="degeeofthridday fs-3 fw-bold">${a.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
                 <small class="smalldegreeofthridday">${a.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></small>
                 <div class="fs-5 weatherstatusofthird">${a.forecast.forecastday[2].day.condition.text}</div>
             
            </div>
        
        </div>
    
        `
        document.querySelector(".nextdatacontent").innerHTML =term2;
        document.querySelector(".thriddaycontent").innerHTML=term3;
    }
   
    
  

 getcurrentweather("cairo");
 
 ////////////////////////////////////////////////////////////////////////////
 function clicked() {
   var layer= document.querySelector(".revet");
   layer.classList.remove("d-none")
    
 }
  