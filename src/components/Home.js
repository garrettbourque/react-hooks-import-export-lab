import React from "react";
import {username, city}  from '../data/user.js'
export function Home() {
  
  
  console.log("username is"+username)
  return (
    
    <div id="home">
      <h1>
      {username} is a Web Developer from {city}
      </h1>
    </div>
  );

}
