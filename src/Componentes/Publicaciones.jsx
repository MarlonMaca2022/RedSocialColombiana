import React from "react";
import Post from "./Post";

export default function Publicaciones() {
  return (
    <>
      <Post 
        author="John Doe" 
        avatar="https://www.w3schools.com/w3images/avatar2.png" 
        time="1 min" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        image="https://www.w3schools.com/w3images/lights.jpg"
      />

      <Post 
        author="Jane Doe" 
        avatar="https://www.w3schools.com/w3images/avatar5.png" 
        time="16 min" 
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />

      <Post 
        author="Angie Jane" 
        avatar="https://www.w3schools.com/w3images/avatar6.png" 
        time="32 min" 
        content="Have you seen this?"
        image="https://www.w3schools.com/w3images/nature.jpg"
      />
    </>
  )
}