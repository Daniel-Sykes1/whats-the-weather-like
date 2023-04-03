var APIKey = "173041cf133fd13121a53f766c9feb97";
var city;


function getApi() {

var requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


fetch(requestUrl) 
.then(function(response) {
    return response.json();
})
.then (function(data){
console.log(data)})



}
getApi();