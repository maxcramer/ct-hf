import { useState, useEffect } from "react";
import Header from "./Header";
import PropertyCard from "./PropertyCard";
import { FaSearch } from "react-icons/fa";

function App() {
  const [properties, setProperties] = useState();

  // use this state to keep track of the user's saved/bookmarked properties
  const [savedProperties, setSavedProperties] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const fetchPropertyData = async () => {
      const response = await fetch("/property-data.json");
      const json = await response.json();

      setProperties(json.result.properties.elements);
    };

    fetchPropertyData();
  }, []);

  const addItem = (property) => {
    setSavedProperties([...savedProperties, { property }]);
  };

  console.log(savedProperties);

  return (
    <div className="container mx-auto my-5">
      <div className="flex row justify-between">
        <Header />
        <div className="mt-5 relative">
          <input
            onChange={(event) => setUserInput(event.target.value)}
            placeholder="Enter a search term"
            className="px-5 py-3 border-gray-400 border rounded w-full"
          />

          <FaSearch
            className="absolute top-3.5 right-3.5 text-gray-400"
            size={20}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!!properties &&
          properties
            .filter((property) => {
              if (userInput === "") {
                return property;
              } else if (
                property.short_description
                  .toLowerCase()
                  .includes(userInput.toLowerCase())
              ) {
                return property;
              }
            })
            .map((property) => (
              <PropertyCard
                key={property.property_id}
                property={property}
                addItem={addItem}
              />
            ))}
      </div>
    </div>
  );
}

export default App;
