import React, {useEffect, useState} from "react";
import DogBar from "./DogBar";
import DogSummary from "./DogSummary";
import Filter from "./Filter";

function App() {
const [dogData, setDogData] = useState([])
const [selected, setSelected]=useState(null)

useEffect(()=>{
    fetch(`http://localhost:3001/pups`)
    .then(r=>r.json())
    .then(data=>setDogData(data))
},[])

const updateDoggo = (updatedDog)=>{
  const updatedDoggo = dogData.map(dog=>
    dog.id === updatedDog.id? updatedDog : dog);
    setDogData(updatedDoggo)
}


const selectedDog = dogData.find(dog=> dog.id ===selected)

console.log(selectedDog)

  return (
    <div className="App">

      <Filter/>

      <DogBar clickedDog={setSelected} dogs={dogData}/>

      <DogSummary dog={selectedDog} updateDoggo={updateDoggo}/>

    </div>
  );
}

export default App;
