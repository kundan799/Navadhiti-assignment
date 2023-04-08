import React, { useState } from "react";
import "./Search.css";

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    fetch(`https://navadhiti-server.onrender.com/fields?q=${value}`)
      .then((response) => response.json())
      .then((data) => setSuggestions(data));
  };
  //

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.label);
  };

  return (
    <div>
      <label htmlFor="search-input">Search:</label>
      <input
        type="text"
        id="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />

      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.type}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
      {suggestions.length > 0 && suggestions[0].error && (
        <p>{suggestions[0].error}</p>
      )}
    </div>
  );
}

export default SearchBox;
