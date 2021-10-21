
const DogBar = ({dogs, clickedDog}) =>{
    console.log(dogs)
    return(
        <div id="dog-bar">
            {dogs.map(dog=>
            <span key={dog.id} onClick={()=> clickedDog(dog.id)}>{dog.name}</span>)}
        </div>
    )
}

export default DogBar;