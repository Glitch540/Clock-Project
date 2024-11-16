 function updateTime(){
 
 // mexico-city
    let mexicoCityElement = document.querySelector("#mexico-city");
    if (mexicoCityElement){
    let mexicoCityDateElement = mexicoCityElement.querySelector(".date");
    let mexicoCityTimeElement = mexicoCityElement.querySelector(".time");
    let mexicoCityTime = moment().tz("Mexico/General");

    mexicoCityDateElement.innerHTML = mexicoCityTime.format("MMMM Do YYYY");
    mexicoCityTimeElement.innerHTML = mexicoCityTime.format("h:mm:ss ss [<small>]A[</small>]");
 
}

 // shanghai
 let shanghaiElement = document.querySelector("#shanghai");
 if (shanghaiElement){
 let shanghaiDateElement = shanghaiElement.querySelector(".date");
 let shanghaiTimeElement = shanghaiElement.querySelector(".time");
 let shanghaiTime = moment().tz("Asia/Shanghai");

 shanghaiDateElement.innerHTML = shanghaiTime.format("MMMM Do YYYY");
 shanghaiTimeElement.innerHTML = shanghaiTime.format("h:mm:ss ss [<small>]A[</small>]");

}
 // kyoto
 let kyotoElement = document.querySelector("#kyoto");
 if (kyotoElement){
 let kyotoDateElement = kyotoElement.querySelector(".date");
 let kyotoTimeElement = kyotoElement.querySelector(".time");
 let kyotoTime = moment().tz("Asia/Tokyo");

 kyotoDateElement.innerHTML = kyotoTime.format("MMMM Do YYYY");
 kyotoTimeElement.innerHTML = kyotoTime.format("h:mm:ss ss [<small>]A[</small>]");

}
 // seville
 let sevilleElement = document.querySelector("#seville");
 if (sevilleElement){
 let sevilleDateElement = sevilleElement.querySelector(".date");
 let sevilleTimeElement = sevilleElement.querySelector(".time");
 let sevilleTime = moment().tz("Europe/Madrid");

 sevilleDateElement.innerHTML = sevilleTime.format("MMMM Do YYYY");
 sevilleTimeElement.innerHTML = sevilleTime.format("h:mm:ss ss [<small>]A[</small>]");

}


 }

function updateCity(event) {
   let cityTimeZone = event.target.value;
   if (cityTimeZone === "current") {
     cityTimeZone = moment.tz.guess();
   }
   let cityName = cityTimeZone.replace("_", " ").split("/")[1];
   let cityTime = moment().tz(cityTimeZone);
   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML = `
   <div id="cities">
   <div class="city">
       <h2>${cityName}</h2>
      <div class="details">
       <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
     <div class="time">${cityTime.format("h:mm:ss ss")} <small>${cityTime.format("A")}</small></div>
   </div>
   </div>`;
 }
 




 
 updateTime();
 setInterval(updateTime, 1000);
 
 let citiesSelectElement = document.querySelector("#city");
 citiesSelectElement.addEventListener("change", updateCity);
