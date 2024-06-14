import React, {useRef, useState, useEffect} from "react";

function Form(){
  const inputCityRef = useRef(null);  
   const [name,setName]=useState("")
   const [city,setCity]=useState("")

   function handleSubmit(){
        alert(`Name: ${name}, ${city}`);
        console.log(`Name: ${name}, ${city}`);
    }

    useEffect(()=>{  
      if(name.includes("1"))      
      {
          alert("Tame name ma number no lakhi sako... samjai chhe..!!!")
          setName("")
      }
      console.log(name)
  },[name]);
  useEffect(()=>{
      if(city.includes("*") || city.includes("$"))      
      {
          alert("Tame special simbol na vapri sako... samjai chhe..!!!")
          setCity("")
      }
  },[city]);
  useEffect(()=>{
      const databaseInstance = {
          "name":"",
          "city":""
      }
      setName(databaseInstance.name)
      setCity(databaseInstance.city)
      console.log("Page Load and data initialize from database")
  },[]);

   return(
     <>
       <form onSubmit={handleSubmit}>
         <label>Name:</label>
         <input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name}/>

         <label>city:</label>
         <input type="text" name="city" onChange={(e)=>setCity(e.target.value)}ref={inputCityRef} value={city}/>

        <button type="submit">Submit</button>

       </form>
       </>
   )
}

export default Form;