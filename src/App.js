import { useState } from "react";

function App() {
  // State (etat, données)
  const [fruits, setFruits] = useState([
    { id: 1, nom: "Mangue" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Orange" }
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");
  // const inputRef = useRef();

  // Comportement
  const handleDelete = (id) => {
    // Copy du state
    const fruitsCopy = [...fruits];
    // Modifier la copy du state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    // Manipuler le state par sonnouveauFruit setter
    setFruits(fruitsCopyUpdated);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputRef.current.value);

    // 1. Copie du state
    const fruitsCopy = [...fruits];
    // 2. Manipulation sur la copie du state
    const id = new Date().getTime();
    const nom = nouveauFruit;
    fruitsCopy.push({ id, nom });
    // 3. Modifier le state avec le setter
    setFruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };

  // Affichage (render)
  return (
    <div className="App">
      <h1>Ajoute et supprime des fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom}{" "}
            <button
              onClick={(event) => {
                handleDelete(fruit.id);
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={nouveauFruit}
          onChange={handleChange}
          placeholder="Ajouter un fruit..."
        />
        <button>Ajouter +</button>
      </form>
    </div>
  );
}

export default App;
// Gestion du formulaire
// 1. Création du formulaire
// 2 Soumission du formulaire
// 3. Collecte des données du formulaire
// Methode 1 utilisation du UseRef
// Methode 2 syncronisation descendant ascendant
