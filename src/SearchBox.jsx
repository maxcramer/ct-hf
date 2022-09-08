import { FaSearch } from "react-icons/fa";
import { useState } from "react";

function SearchBox() {
  const [userInput, setUserInput] = useState("");

  return (
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
  );
}

export default SearchBox;
