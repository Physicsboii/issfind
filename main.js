const api = `https://api.wheretheiss.at/v1/satellites/25544`;
fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const long = document.querySelector(".longitude");
    const lat = document.querySelector(".latitude");
    const velo = document.querySelector(".vel");
    const alti = document.querySelector(".al");
    console.log(data);
    const { latitude, longitude ,velocity,altitude} = data;
    console.log("THE LATITUDE OF ISS IS => " + latitude);
    console.log("THE LONGITUDE OF ISS IS => " + longitude);
    console.log("THE VELOCITY OF ISS IS => " + velocity);
    long.innerText = longitude;
    lat.innerText = latitude;
    velo.innerText = velocity + ' kmph';
    alti.innerText = altitude + ' km';
    


   

  });
  
