import React, { useEffect, useState } from "react";



const TempApp = ()=>{

  const[city,setCity]=useState("Pune");
  const[search,setSearch]=useState("Pune");

  useEffect( ()=>{
    const fetchApi = async()=>{
     
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=367e14d5de4491f3f22b7a8b8fb3b69d`;
      const response = await fetch(url);
      // console.log(response);
      const resJson = await response.json();
      // console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  },[search])


    return (
      <div className="box">
          <div className="inputData">
              <input
              type="search"
              className="inputField"
              onChange= {(event)=>{
                 setSearch(event.target.value)        
              }}
              />
          </div>
        
        {
          !city ? (<p className="errorMsg">No City Found</p>) : (

         <div>
           <div className="info">
           <h3 className="location">
           <i className="fas fa-street-view"></i>{search}
           </h3>
          
       <h1 className="temp">{city.temp}°C</h1> 
     
       <h3 className="tempmin_max">Min : {city.temp_min}°C | Max : {city.temp_max}°C </h3>
          </div>
          <div className="wave -one"></div>
          <div className="wave -two"></div>
          <div className="wave -three"></div>
      
         </div>
     )}
         </div>  
)}
      
    

export default TempApp;