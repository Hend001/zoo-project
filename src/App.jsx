import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import { animals, birds } from "./animalsList";

function App() {
  const [animalsList, setAnimals] = useState(animals);
  //const [animalsList, setAnimals] = useState(animals.concat(birds));
  console.log(animalsList);

  const [search, setSearch] = useState("");
  console.log(search);

  const removeCard = (name) => {
    const updateArray = animalsList.filter((animal) => animal.name !== name);
    setAnimals(updateArray);
  };

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  // const heartIcon = (likes) => {
  //   console.log(likes);
  //   if (likes < 1) {
  //     return "heart_broken";
  //   } else {
  //     return "favorite";
  //   }
  // };

  //likes function
  // const addLikesCounter = (animalsData) => {
  //   const updatedArray = animalsList.map((animal) => {
  //     if (animal.name == animalsData) {
  //       return { name: animal.name, likes: animal.likes + 1 };
  //     } else {
  //       return { name: animal.name, likes: animal.likes };
  //     }
  //   });
  //   setAnimals(updatedArray);
  // };

  // const removeLikesCounter = (animalsData) => {
  //   const updatedArray = animalsList.map((animal) => {
  //     if (animal.name == animalsData) {
  //       return { name: animal.name, likes: animal.likes - 1 };
  //     } else {
  //       return { name: animal.name, likes: animal.likes };
  //     }
  //   });
  //   setAnimals(updatedArray);
  // };

  const likesCounter = (animalsData, events) => {
    const updatedArray = animalsList.map((animal) => {
      if (animal.name == animalsData && events === "add") {
        return { name: animal.name, likes: animal.likes + 1 };
      } else if (animal.name == animalsData && events === "remove") {
        return { name: animal.name, likes: animal.likes - 1 };
      }
      return { name: animal.name, likes: animal.likes };
    });
    setAnimals(updatedArray);
    // console.log(updatedArray);
  };

  const searchRes = (filteredAnimalsList) => {
    if (filteredAnimalsList.length === 0) {
      return "Not found";
    }
  };

  return (
    <>
      <Header />
      <main>
        <h1>Animals</h1>
        <input type="text" onChange={searchHandler} />
        <div className="cards">
          {animalsList
            .filter((animal) =>
              animal.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((animal) => (
              <Card
                key={animal.name}
                title={animal.name}
                likes={animal.likes}
                click={() => removeCard(animal.name)}
                likesupdate={() => likesCounter(animal.name, "add")}
                dislikeupdate={() => likesCounter(animal.name, "remove")}
              />
            ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
