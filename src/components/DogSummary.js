

const DogSummary = ({dog, updateDoggo}) => {
    if(!dog) return <h3>Select a Doggo</h3>
    // console.log(dog)
const {id, name, image, isGoodDog } =dog

const handleClick = () =>{
    fetch(`http://localhost:3001/pups/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            isGoodDog: !isGoodDog,
        }),
    }).then(r=>r.json())
    .then(updateDoggo)
}


    return(
        <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
        <img width='200px' src={image}/>
        <h2>{name}</h2>
        <button onClick={handleClick}>{isGoodDog? 'Good' : 'Bad'}</button>
      </div>
    )
}

export default DogSummary;