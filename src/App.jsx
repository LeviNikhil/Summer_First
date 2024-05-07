import React, { useState } from "react"
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
function App(){

 const data = [
   {image:"https://i.ytimg.com/vi/lwv_0SEJ4NQ/maxresdefault.jpg",name:"Pehle Bhi Main",artist:"Vishal Mishra",added:false},
   {image:"https://c.saavncdn.com/222/Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg",name:" Raataan Lambiyan",artist:"Jubin Nautiyal",added:false},
   {image:"https://i.ytimg.com/vi/SaeM5XQp_eE/sddefault.jpg",name:"Tum Se Hi",artist:"Mohit Chauhan",added:false},
   {image:"https://i.ytimg.com/vi/hhdSyBHuI88/maxresdefault.jpg",name:"Zaalima",artist:"Arijit Singh",added:false},
   {image:"https://i.ytimg.com/vi/D8XFTglfSMg/hq720.jpg",name:"Pee Loon",artist:"Mohit Chauhan",added:false},
   {image:"https://i.ytimg.com/vi/BoTY77KO4dA/hqdefault.jpg",name:"Humnava Mere",artist:"Jubin Nautiyal",added:true},
 ];

 const [songdata,setsongdata]=useState(data);

 const handleclick = (index) =>{
   return setsongdata((prev)=>{
      return prev.map(item=>{
         if(item.name===songdata[index].name){
           return {...item,added:!item.added}
         }
         else{
           return item;
         }
      })
   })
 }

  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
          <Navbar data={songdata}/>
        <div className="px-20 flex gap-10 mt-8 flex-wrap">
          {songdata.map((obj,index)=>(
             <Card data={obj} handleclick={handleclick} index={index}/>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default App;