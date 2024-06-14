import React, {useRef, useState, useEffect} from "react";

function FormData(){
    // const inputNameRef = useRef("Atmiya");
    const inputCityRef = useRef(null);
    const [name, setName] = useState("Dr. Prakash Gujarati")    
    const [city, setCity] = useState("Rajkot")    
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
            "name":"Rahul Gautam",
            "city":"Rajkot"
        }
        setName(databaseInstance.name)
        setCity(databaseInstance.city)
        console.log("Page Load and data initialize from database")
    },[]);
    //,[] aa no hoi to - its call every changes in componets;
    // ,[] jo aa hoi to - its call at once;
    //,[* dependancies, ]

    return (
        <>
        <div className="App">            
            <h3>{name} {city}</h3>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input type="text" name="name" 
                onChange={(e)=>setName(e.target.value)}
                value={name}
                />
                 <input type="text" name="city"
                 onChange={(e)=>setCity(e.target.value)}
                 ref={inputCityRef}
                    value={city}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    )
}

export default FormData